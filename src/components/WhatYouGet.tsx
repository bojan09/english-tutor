import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhatYouGet = () => {
  const benefits = [
    {
      icon: "📖",
      title: "Personalized Lessons",
      desc: "Tailored to your level and learning goals.",
      bg: "from-purple-500 to-purple-600",
    },
    {
      icon: "👩‍🏫",
      title: "Expert Guidance",
      desc: "Learn from experienced English teachers.",
      bg: "from-indigo-500 to-indigo-600",
    },
    {
      icon: "📅",
      title: "Flexible Schedule",
      desc: "Easy booking and rescheduling options.",
      bg: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 pb-20 animate-slide-up bg-gradient-to-r from-purple-900 to-purple-700 bg-clip-text text-transparent">
          What You'll Get
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden group"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-20 h-20 ${benefit.bg} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {benefit.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
