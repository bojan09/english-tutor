import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b px-4 lg:px-6 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            📖 EnglishMentor
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`hover:text-purple-600 ${
                isHome
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/book-session"
              className={`hover:text-purple-600 ${
                location.pathname === "/book-session"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600"
              }`}
            >
              Book a Session
            </Link>
            <Link
              to="/contact"
              className={`hover:text-purple-600 ${
                location.pathname === "/contact"
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600"
              }`}
            >
              Contact
            </Link>
          </nav>
          <Button
            asChild
            variant="default"
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Link to="/book-session">Sign In</Link>
          </Button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EnglishMentor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
