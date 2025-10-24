import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { useScrollToTop } from "@/hooks/ScrollToTop";

const Contact = () => {
  useScrollToTop();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent mb-4">
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
                    className="h-5 w-5 stroke-blue-500"
                    strokeWidth={2}
                    fill="none"
                  />
                </div>
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  placeholder="your.email@example.com"
                  className="focus:ring-purple-400/50 border-gray-300/50 text-gray-900 placeholder-gray-400/70 focus:border-purple-400/50"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What can we help you with?"
                  className="focus:ring-purple-400/50 border-gray-300/50 text-gray-900 placeholder-gray-400/70 focus:border-purple-400/50"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300/50 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400/50 focus:border-purple-400/50 resize-vertical text-gray-900 placeholder-gray-400/70 bg-white/80"
                  placeholder="Tell us about your English learning goals, questions, or how we can help you..."
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500/90 to-purple-400/90 hover:from-purple-600/90 hover:to-purple-500/90">
                Sign In to Send Message
              </Button>
              <p className="text-sm text-gray-500/80 mt-4 text-center">
                Please sign in to send us a message. This helps us provide
                personalized responses.
              </p>
            </CardContent>
          </Card>
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100/80 rounded mr-2">
                    <Mail
                      className="h-5 w-5 stroke-blue-500"
                      strokeWidth={2}
                      fill="none"
                    />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100/80 rounded mr-3">
                    <Mail
                      className="h-5 w-5 stroke-blue-500"
                      strokeWidth={2}
                      fill="none"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">hello@englishmentor.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100/80 rounded mr-3">
                    <Phone
                      className="h-5 w-5 stroke-green-500"
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
                      className="h-5 w-5 stroke-purple-500"
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
                  className="h-5 w-5 stroke-blue-500"
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
