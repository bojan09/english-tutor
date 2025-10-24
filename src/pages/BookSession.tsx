import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
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

const BookSession = () => {
  useScrollToTop();

  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <SignInPrompt />;
  }

  return (
    <section
      id="book-session"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent pb-4">
            Book Your English Session
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Choose from available time slots and start your personalized
            learning journey.
          </p>
        </div>
        <div className="max-w-md mx-auto animate-fade-in">
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 rounded-lg">
                <Calendar
                  className="h-8 w-8 stroke-blue-500"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                No Available Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                There are currently no available sessions. Please check back
                later or contact us to schedule a custom session.
              </CardDescription>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
