import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, User, Calendar } from "lucide-react";

const WhatYouGet = () => {
  return (
    <section
      id="what-we-offer"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 pb-20 animate-slide-up bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">
          What You'll Get
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personalized Lessons */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform bg-teal-100 rounded-lg">
                <BookOpen
                  className="h-8 w-8 stroke-teal-500 group-hover:stroke-teal-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
                Personalized Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Tailored to your level and learning goals.
              </CardDescription>
            </CardContent>
          </Card>
          {/* Expert Guidance */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform bg-rose-100 rounded-lg">
                <User
                  className="h-8 w-8 stroke-rose-500 group-hover:stroke-rose-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
                Expert Guidance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Learn from experienced English teachers.
              </CardDescription>
            </CardContent>
          </Card>
          {/* Flexible Schedule */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform bg-amber-100 rounded-lg">
                <Calendar
                  className="h-8 w-8 stroke-amber-500 group-hover:stroke-amber-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
                Flexible Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                Easy booking and rescheduling options.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
