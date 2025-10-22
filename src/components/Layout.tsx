import { Link, useLocation } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useScrollToTop } from "@/hooks/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useScrollToTop(); // Add this line: Auto-scrolls on route change

  const { signOut } = useClerk();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <header className="backdrop-blur-md bg-white/80 border-b border-purple-100/50 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
          >
            📖 EnglishMentor
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isHome
                  ? "text-purple-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-purple-400"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/book-session"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                location.pathname === "/book-session"
                  ? "text-purple-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-purple-400"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Book a Session
            </Link>
            <Link
              to="/contact"
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                location.pathname === "/contact"
                  ? "text-purple-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-purple-400"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <SignedIn>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-purple-50 transition-colors"
                  >
                    Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 border-purple-100 shadow-lg"
                  align="end"
                  forceMount
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Your Name
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        email@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserButton afterSignOutUrl="/" />
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button
                asChild
                variant="default"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all mr-2"
              >
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-300 hover:bg-purple-50 text-purple-700 hover:text-purple-900 shadow-sm hover:shadow-md transition-all"
              >
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
