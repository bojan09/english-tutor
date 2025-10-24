// src/components/Layout.tsx
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { useScrollToTop } from "@/hooks/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useScrollToTop(); // Smooth scroll to top on load

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
