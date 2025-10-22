import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Calendar, MessageCircle, User } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Why Choose EnglishMentor?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We combine proven teaching methods with modern technology to deliver
            exceptional learning experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {/* Personalized Learning */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden group">
            <CardHeader className="pb-4">
              {/* Icon without background - direct styling */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform bg-purple-100 rounded-lg">
                <BookOpen
                  className="h-8 w-8 stroke-purple-500 group-hover:stroke-purple-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-purple-500 transition-colors">
                Personalized Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed">
                Lessons designed to your learning style and goals.
              </CardDescription>
            </CardContent>
          </Card>
          {/* Flexible Scheduling */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden group">
            <CardHeader className="pb-4">
              {/* Icon without background */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform bg-blue-100 rounded-lg">
                <Calendar
                  className="h-8 w-8 stroke-blue-500 group-hover:stroke-blue-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-purple-500 transition-colors ">
                Flexible Scheduling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed">
                Book sessions at times that work best for your busy schedule.
              </CardDescription>
            </CardContent>
          </Card>
          {/* Direct Communication */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden group">
            <CardHeader className="pb-4">
              {/* Icon without background */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform bg-green-100 rounded-lg">
                <MessageCircle
                  className="h-8 w-8 stroke-green-500 group-hover:stroke-green-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-purple-500 transition-colors">
                Direct Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed">
                Direct email contact with quick auto-reply responses.
              </CardDescription>
            </CardContent>
          </Card>
          {/* Expert Instruction */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden group">
            <CardHeader className="pb-4">
              {/* Icon without background */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform bg-indigo-100 rounded-lg">
                <User
                  className="h-8 w-8 stroke-indigo-500 group-hover:stroke-indigo-600"
                  strokeWidth={2}
                  fill="none"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-purple-500 transition-colors">
                Expert Instruction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 leading-relaxed">
                Learn from experienced English teachers with proven results.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
