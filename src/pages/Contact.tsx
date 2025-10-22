import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Have questions about our English tutoring services? We're here to
            help you start your learning journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="w-6 h-6 bg-blue-100 rounded mr-3 flex items-center justify-center">
                  ✉️
                </span>
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What can we help you with?"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your English learning goals, questions, or how we can help you..."
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Sign In to Send Message
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Please sign in to send us a message. This helps us provide
                personalized responses.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded mr-3 flex items-center justify-center">
                    📧
                  </span>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded mr-3 flex items-center justify-center">
                    ✉️
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>hello@englishmentor.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded mr-3 flex items-center justify-center">
                    📞
                  </span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-purple-100 rounded mr-3 flex items-center justify-center">
                    🕒
                  </span>
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p>Monday - Friday, 9AM - 6PM PST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How long are the tutoring sessions?
                    </AccordionTrigger>
                    <AccordionContent>
                      Standard sessions are 60 minutes, but we can customize the
                      duration based on your needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Can I reschedule a session?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, you can reschedule up to 24 hours before your session
                      through your dashboard.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      What level of English do you teach?
                    </AccordionTrigger>
                    <AccordionContent>
                      We teach all levels from beginner to advanced, including
                      business English and exam preparation.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className="border-0 shadow-lg bg-blue-50">
          <CardContent className="py-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                ⏱️
              </span>
              <span className="font-semibold">Quick Response</span>
            </div>
            <p>
              We typically respond to messages within 2-4 hours during business
              hours.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Urgent questions? Call us directly for immediate assistance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
