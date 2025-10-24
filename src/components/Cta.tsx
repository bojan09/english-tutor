import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  // SVG data URI for dot pattern with rich gold fill for school-like aesthetic
  const dotPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="py-24 relative bg-gradient-to-br from-blue-700 to-blue-400 text-white overflow-hidden">
      {/* Background Pattern with subtle animation */}
      <div
        className={`absolute inset-0 bg-[url('${dotPattern}')] bg-[size:60px_60px] opacity-15 animate-pulse-slow`}
        style={{ backgroundRepeat: "repeat" }}
      />
      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-extrabold pb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent tracking-tight">
          Ready to Start Your English Journey?
        </h2>
        <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed opacity-95 font-light">
          Join thousands of students transforming their English skills with
          MyEnglishTutor's expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link to="/book-session">Book a Session</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ring-1 ring-blue-500/30 hover:ring-blue-500/50"
          >
            <Link to="/contact">Ask Questions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
