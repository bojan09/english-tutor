import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useScrollToTop } from "@/hooks/ScrollToTop";
import SignInPrompt from "@/components/SignInPrompt";
import { supabase } from "@/lib/supabaseClient";

const AVAILABLE_TIMES = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const BookSession = () => {
  useScrollToTop();
  const { isSignedIn, user } = useUser();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState<{ [key: string]: string[] }>(
    {}
  );
  const [isBooking, setIsBooking] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch booked sessions
  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from("bookings").select("*");
      if (error) console.error(error);

      const slots: { [key: string]: string[] } = {};
      data?.forEach((s) => {
        if (!slots[s.date]) slots[s.date] = [];
        slots[s.date].push(s.time);
      });
      setBookedSlots(slots);
    };
    fetchBookings();
  }, []);

  if (!isSignedIn) return <SignInPrompt />;

  const handleBook = async () => {
    if (!date || !time) {
      setMessage("Please select both date and time.");
      return;
    }

    const isTaken = bookedSlots[date]?.includes(time);
    if (isTaken) {
      setMessage("❌ This time slot is already booked.");
      return;
    }

    setIsBooking(true);
    setMessage("");

    const { error } = await supabase.from("bookings").insert({
      user_id: user.id,
      email: user.primaryEmailAddress?.emailAddress || "",
      date,
      time,
    });

    if (error) {
      console.error(error);
      setMessage("❌ Booking failed. Please try again.");
    } else {
      setBookedSlots((prev) => ({
        ...prev,
        [date]: [...(prev[date] || []), time],
      }));
      setMessage("✅ Session booked successfully!");
      setDate("");
      setTime("");
    }

    setIsBooking(false);
  };

  const isTimeBooked = (d: string, t: string) => bookedSlots[d]?.includes(t);

  return (
    <section
      id="book-session"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent pb-4">
            Book Your English Session
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Choose a date and time that works for you.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md rounded-xl overflow-hidden">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-lg">
                <Calendar className="h-8 w-8 stroke-blue-500" />
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Schedule Your Session
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Pick a date and time slot that fits your schedule.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 text-center">
              <div className="space-y-2">
                <label className="text-gray-700 text-sm font-medium">
                  Choose a Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-blue-200 rounded-lg px-3 py-2 text-gray-800 focus:ring-2 focus:ring-blue-400"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              {date && (
                <div className="space-y-2">
                  <label className="text-gray-700 text-sm font-medium">
                    Select a Time
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {AVAILABLE_TIMES.map((t) => {
                      const booked = isTimeBooked(date, t);
                      return (
                        <button
                          key={t}
                          disabled={booked}
                          onClick={() => setTime(t)}
                          className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                            booked
                              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                              : time === t
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600"
                              : "bg-white text-gray-700 border-blue-200 hover:bg-blue-50"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {message && (
                <p
                  className={`text-sm ${
                    message.includes("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <Button
                onClick={handleBook}
                disabled={isBooking}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isBooking ? "Booking..." : "Book Session"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
