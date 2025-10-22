import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Instagram } from "lucide-react";

import logo from "../assets/teacher_logo.svg";

const Footer = () => {
  const dotPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 overflow-hidden mt-24">
      {/* Subtle Dot Pattern */}
      <div
        className={`absolute inset-0 bg-[url('${dotPattern}')] bg-[size:60px_60px] opacity-10`}
        style={{ backgroundRepeat: "repeat" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center gap-3"
            >
              <img src={logo} alt="logo" className="size-8" /> Your Tutor
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-80">
              Empowering your English journey with expert, personalized
              tutoring.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-white group-hover:text-purple-400" />
              </a>
              <a
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-white group-hover:text-purple-400" />
              </a>
              <a
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-white group-hover:text-purple-400" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-purple-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/book-session"
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  Book Session
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-purple-200">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200 block"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-purple-200 text-lg">
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm opacity-80">
                  Subscribe for tips and offers.
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Your email"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-purple-500"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg"
                  >
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2025 EnglishMentor. All rights reserved. Made with ❤️ for
            language learners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
