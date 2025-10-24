import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Mail } from "lucide-react";

import hero_img from "../assets/hero_img.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-blue-50" />
      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
          Master English
          <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            with Expert Guidance
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Unlock your potential with personalized English tutoring. Professional
          lessons, flexible scheduling, and dedicated support for your language
          learning journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* Primary Button */}
          <Button
            asChild
            size="lg"
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-xl font-semibold px-8 py-6 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Link to="/book-session" className="flex items-center gap-2">
              <CalendarIcon
                className="h-5 w-5 group-hover:rotate-12 transition-transform stroke-white"
                strokeWidth={2.5}
              />
              Book Your First Session
            </Link>
          </Button>
          {/* Secondary Button */}
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-xl font-medium px-8 py-6 text-blue-700 hover:text-blue-900 hover:bg-blue-50/50 rounded-lg border-transparent transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Link to="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" strokeWidth={2.5} />
              Get in Touch
            </Link>
          </Button>
        </div>
        {/* Hero Image with Gradient Overlay */}
        <div className="relative mx-auto max-w-5xl mt-16 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-3xl" />
          <img
            src={hero_img}
            alt="Diverse students collaborating on English lessons around a table with laptops and books"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
