import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { useScrollToTop } from "@/hooks/ScrollToTop";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useScrollToTop();

  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ message: "", type: "" });

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setStatus({
        message:
          "EmailJS configuration is missing. Please check environment variables.",
        type: "error",
      });
      setIsSending(false);
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
          console.log("Email sent:", result.text);
          setStatus({ message: "Message sent successfully!", type: "success" });
          form.current?.reset();
          setIsSending(false);
          setTimeout(() => {
            setStatus({ message: "", type: "" });
          }, 3000);
        })
        .catch((error) => {
          console.error("Email sending failed:", error.text);
          setStatus({
            message: "Failed to send message. Please try again.",
            type: "error",
          });
          setIsSending(false);
          setTimeout(() => {
            setStatus({ message: "", type: "" });
          }, 3000);
        });
    } else {
      setStatus({
        message: "Form reference is invalid. Please try again.",
        type: "error",
      });
      setIsSending(false);
      setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 3000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have questions about our English tutoring services? We're here to
            help you start your learning journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Send Message Form */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100/80 rounded mr-2">
                  <MessageCircle
                    className="h-5 w-5 stroke-blue-600"
                    strokeWidth={2}
                    fill="none"
                  />
                </div>
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form ref={form} onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="focus:ring-blue-400/50 border-gray-300/50 text-gray-900 placeholder-gray-400/70 focus:border-blue-400/50 my-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What can we help you with?"
                    className="focus:ring-blue-400/50 border-gray-300/50 text-gray-900 placeholder-gray-400/70 focus:border-blue-400/50 my-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full focus:ring-blue-400/50 border-gray-300/50 text-gray-900 placeholder-gray-400/70 focus:border-blue-400/50 bg-white/80 my-2"
                    placeholder="Tell us about your English learning goals, questions, or how we can help you..."
                    required
                  />
                </div>

                <div className="flex items-center justify-center mt-6 mb-2">
                  <Button
                    type="submit"
                    className="w-fit bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-amber-50"
                    disabled={isSending}
                  >
                    {isSending ? "Sending Message..." : "Send Message"}
                  </Button>
                </div>
              </form>
              {status.message && (
                <div className="space-y-2">
                  <p
                    className={`text-sm mt-4 text-center ${
                      status.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                  {status.type === "success" && (
                    <p className="text-sm text-gray-500 text-center">
                      If you don't receive an email, please check your spam/junk
                      folder.
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-100/80 rounded mr-3">
                    <Mail
                      className="h-5 w-5 stroke-orange-600"
                      strokeWidth={2}
                      fill="none"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">myenglish.tutormk@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100/80 rounded mr-3">
                    <Phone
                      className="h-5 w-5 stroke-green-600"
                      strokeWidth={2}
                      fill="none"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100/80 rounded mr-3">
                    <Clock
                      className="h-5 w-5 stroke-purple-600"
                      strokeWidth={2}
                      fill="none"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-gray-700">
                      Monday - Friday, 9AM - 6PM PST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Quick Response */}
        <Card className="border-0 bg-blue-50/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardContent className="py-8 text-center space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-200/80 rounded-full mr-2">
                <Clock
                  className="h-5 w-5 stroke-blue-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <span className="font-semibold text-gray-900">
                Quick Response
              </span>
            </div>
            <p className="text-gray-700 text-lg">
              We typically respond to messages within 2-4 hours during business
              hours.
            </p>
            <p className="text-gray-600 text-sm">
              Urgent questions? Call us directly for immediate assistance.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
