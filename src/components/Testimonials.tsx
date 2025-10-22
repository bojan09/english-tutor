import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Highly personalized approach.",
      author: "Sarah Johnson",
      bg: "bg-purple-50",
    },
    {
      quote: "Flexible scheduling made it easy.",
      author: "Miguel Rodriguez",
      bg: "bg-blue-50",
    },
    {
      quote: "Professional and effective teaching.",
      author: "Li Wei",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 pb-20 animate-slide-up bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className={`border-0 ${testimonial.bg} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl p-6 group`}
            >
              <CardHeader className="pb-4">
                <div className="flex text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                  ⭐⭐⭐⭐⭐
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
