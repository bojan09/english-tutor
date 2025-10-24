import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import NewsletterSignup from "./NewsLetterSignUp";
import logo from "../assets/teacher_logo.svg";

const Footer = () => {
  // SVG data URI for dot pattern with rich gold fill and increased opacity
  const dotPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.25'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <footer className="relative bg-gradient-to-bl from-blue-500 to-blue-700 text-white py-12 overflow-hidden mt-24 opacity-90">
      <div
        className={`absolute inset-0 bg-[url('${dotPattern}')] bg-[size:60px_60px] opacity-25 backdrop-blur-sm`}
        style={{ backgroundRepeat: "repeat" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:from-white hover:to-blue-300 transition-all duration-300 flex gap-3 mb-4 items-center"
            >
              <img src={logo} alt="MyEnglishTutor Logo" className="size-8" />{" "}
              MyEnglishTutor
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-90 font-light">
              Empowering your English journey with expert, personalized
              tutoring.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="group p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-white group-hover:text-yellow-600" />
              </a>
              <a
                href="#"
                className="group p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-white group-hover:text-yellow-600" />
              </a>
              <a
                href="#"
                className="group p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-white group-hover:text-yellow-600" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-blue-100">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-blue-50 transition-colors duration-200 block font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/book-session"
                  className="text-gray-200 hover:text-blue-50 transition-colors duration-200 block font-medium"
                >
                  Book Session
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-blue-50 transition-colors duration-200 block font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-blue-100">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-blue-50 transition-colors duration-200 block font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-blue-50 transition-colors duration-200 block font-medium"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-blue-50 transition-colors duration-200 block font-medium"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <NewsletterSignup />
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-blue-400/20 pt-8 text-center text-sm text-gray-200">
          <p>
            &copy; 2025 MyEnglishTutor. All rights reserved. Made with ❤️ for
            language learners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
