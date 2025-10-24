// src/components/Navbar.tsx
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import logo from "../assets/teacher_logo.svg";
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Menu, X, Home, Calendar, MessageCircle } from "lucide-react";
import { useState, FC } from "react";

interface NavItem {
  to: string;
  label: string;
  icon: FC<{ className?: string }>;
  sectionId?: string; // Optional: For internal sections on home
}

const Navbar = () => {
  const { signOut } = useClerk();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { to: "/", label: "Home", icon: Home },

    {
      to: "/book-session",
      label: "Book Session",
      icon: Calendar,
    },
    { to: "/contact", label: "Contact", icon: MessageCircle },
  ];

  // Helper to get link href: use section ID hash if on home and has sectionId
  const getLinkHref = (item: NavItem): string => {
    if (isHome && item.sectionId) {
      return `#${item.sectionId}`;
    }
    return item.to;
  };

  // Handler for logo click: Scroll to top if on home, else navigate
  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault(); // Prevent default navigation
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Else, normal navigation via Link
  };

  return (
    <header className="backdrop-blur-md bg-white/80 border-b border-purple-100/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <img src={logo} alt="logo" className="size-8" /> My English Tutor
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.to ||
              (isHome && location.hash === `#${item.sectionId}`);
            const href = getLinkHref(item);
            return (
              <Link
                key={item.to}
                to={href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  isActive
                    ? "text-purple-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-purple-400"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-2">
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

        {/* Mobile Menu Trigger */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] p-0 bg-white/95 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    location.pathname === item.to ||
                    (isHome && location.hash === `#${item.sectionId}`);
                  const href = getLinkHref(item);
                  return (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-purple-100 text-purple-700 font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            isActive ? "stroke-purple-600" : "stroke-gray-500"
                          }`}
                        />
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <SignedIn>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start">
                        Profile
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
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
                </SignedIn>
                <SignedOut>
                  <Link to="/sign-in">
                    <Button
                      variant="default"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/sign-up">
                    <Button
                      variant="outline"
                      className="w-full border-purple-300 hover:bg-purple-50"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </SignedOut>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
