import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "📚",
      title: "Personalized Learning",
      desc: "Lessons designed to your learning style and goals.",
      bg: "from-purple-500 to-purple-600",
    },
    {
      icon: "📅",
      title: "Flexible Scheduling",
      desc: "Book sessions at times that work best for your busy schedule.",
      bg: "from-blue-500 to-blue-600",
    },
    {
      icon: "💬",
      title: "Direct Communication",
      desc: "Direct email contact with quick auto-reply responses.",
      bg: "from-green-500 to-green-600",
    },
    {
      icon: "👩‍🏫",
      title: "Expert Instruction",
      desc: "Learn from experienced English teachers with proven results.",
      bg: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent pb-6">
            Why Choose EnglishMentor?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine proven teaching methods with modern technology to deliver
            exceptional learning experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 ${feature.bg} text-white rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
