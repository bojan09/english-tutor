import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Highly personalized approach.",
      author: "Sarah Johnson",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconStroke: "stroke-purple-500",
      iconHoverStroke: "stroke-purple-600",
    },
    {
      quote: "Flexible scheduling made it easy.",
      author: "Miguel Rodriguez",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconStroke: "stroke-blue-500",
      iconHoverStroke: "stroke-blue-600",
    },
    {
      quote: "Professional and effective teaching.",
      author: "Li Wei",
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconStroke: "stroke-green-500",
      iconHoverStroke: "stroke-green-600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 pb-20 animate-slide-up bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className={`border-0 ${testimonial.bg} shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl p-6 group`}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform rounded-lg ${testimonial.iconBg}">
                  <Star
                    className={`h-8 w-8 ${testimonial.iconStroke} group-hover:${testimonial.iconHoverStroke}`}
                    strokeWidth={2}
                    fill="none"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 italic leading-relaxed font-medium text-lg">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
