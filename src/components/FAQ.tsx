import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { useScrollToTop } from "@/hooks/ScrollToTop";

const FAQ = () => {
  useScrollToTop();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent pb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-light">
            Got questions? We've got answers. Find quick insights below or reach
            out anytime.
          </p>
        </div>
        <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
          <CardHeader className="px-6 py-6">
            <div className="flex items-center gap-2 justify-center mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100/80 rounded">
                <HelpCircle
                  className="h-5 w-5 stroke-blue-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Common Questions
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200/50"
              >
                <AccordionTrigger className="text-gray-700 hover:text-blue-600 hover:no-underline focus:text-blue-600 focus-visible:ring-blue-400/50 py-4 font-semibold transition-colors duration-200">
                  How long are the tutoring sessions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-yellow-50/50 px-4 py-3 rounded-md mt-2">
                  Standard sessions are 60 minutes, but we can customize the
                  duration based on your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-gray-200/50"
              >
                <AccordionTrigger className="text-gray-700 hover:text-blue-600 hover:no-underline focus:text-blue-600 focus-visible:ring-blue-400/50 py-4 font-semibold transition-colors duration-200">
                  Can I reschedule a session?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-yellow-50/50 px-4 py-3 rounded-md mt-2">
                  Yes, you can reschedule up to 24 hours before your session
                  through your dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-gray-200/50"
              >
                <AccordionTrigger className="text-gray-700 hover:text-blue-600 hover:no-underline focus:text-blue-600 focus-visible:ring-blue-400/50 py-4 font-semibold transition-colors duration-200">
                  What level of English do you teach?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-yellow-50/50 px-4 py-3 rounded-md mt-2">
                  We teach all levels from beginner to advanced, including
                  business English and exam preparation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-b border-gray-200/50"
              >
                <AccordionTrigger className="text-gray-700 hover:text-blue-600 hover:no-underline focus:text-blue-600 focus-visible:ring-blue-400/50 py-4 font-semibold transition-colors duration-200">
                  How much does a session cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-yellow-50/50 px-4 py-3 rounded-md mt-2">
                  Sessions start at $25 for 60 minutes. Packages and
                  first-session discounts are available—check our pricing page
                  for details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border-b border-gray-200/50"
              >
                <AccordionTrigger className="text-gray-700 hover:text-blue-600 hover:no-underline focus:text-blue-600 focus-visible:ring-blue-400/50 py-4 font-semibold transition-colors duration-200">
                  Do you offer group lessons?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-yellow-50/50 px-4 py-3 rounded-md mt-2">
                  Yes, we offer small group sessions for 2-5 learners at a
                  discounted rate. Contact us to set one up.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border-b border-gray-200/50"
              >
                <AccordionTrigger className="text-gray-700 hover:text-blue-600 hover:no-underline focus:text-blue-600 focus-visible:ring-blue-400/50 py-4 font-semibold transition-colors duration-200">
                  What materials do I need?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-yellow-50/50 px-4 py-3 rounded-md mt-2">
                  Just a stable internet connection and webcam. We provide all
                  lesson materials digitally—no extra costs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
