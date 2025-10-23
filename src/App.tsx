import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookSession from "./pages/BookSession";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {" "}
      {/* Ensures full height, footer at bottom */}
      <Routes>
        {/* Public routes with Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        {/* Auth pages (full-page, no Layout) */}
        <Route
          path="/sign-in/*"
          element={
            <SignedOut>
              <SignIn />
            </SignedOut>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <SignedOut>
              <SignUp />
            </SignedOut>
          }
        />

        {/* Protected routes with Layout */}
        <Route
          path="/book-session"
          element={
            <SignedIn>
              <Layout>
                <BookSession />
              </Layout>
            </SignedIn>
          }
        />

        {/* Fallback: Redirect unauth to sign-in */}
        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
