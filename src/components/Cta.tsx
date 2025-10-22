import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  // SVG data URI for dot pattern (cleaned for JSX)
  const dotPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="py-24 relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
      {/* Fixed Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('${dotPattern}')] bg-[size:60px_60px] opacity-20 animate-pulse-slow`}
        style={{ backgroundRepeat: "repeat" }} // Ensures repeat (Tailwind fallback)
      />
      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-bold pb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Ready to Start Your English Journey?
        </h2>
        <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Join thousands of satisfied students who have improved their English
          with our expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-purple-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl px-10 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link to="/book-session">Book a Session</Link>
          </Button>
          {/* Fixed Secondary Button: Visible border with pill shape */}
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-white hover:text-purple-200 border border-white/30 hover:border-white/60 px-10 py-4 text-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md ring-1 ring-white/10 hover:ring-white/20"
          >
            <Link to="/contact">Ask Questions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
