import { SignIn } from "@clerk/clerk-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Lock, BookOpen } from "lucide-react";
import { useScrollToTop } from "@/hooks/ScrollToTop";

const SignInPrompt = () => {
  useScrollToTop();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <BookOpen className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unlock Your Free Session
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            To choose and book your free introductory English session, please
            sign in or create an account. It's quick, secure, and lets us tailor
            your learning journey.
          </p>
        </div>
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Sign In
            </CardTitle>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back! Let's get started.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <SignIn
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 text-white w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300",
                  footerAction:
                    "text-purple-500 hover:text-purple-600 font-medium",
                  socialButtonsBlockButton:
                    "bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300 rounded-lg",
                  input:
                    "bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-400 focus:ring-purple-400/50 focus:border-purple-400/50",
                },
              }}
            />
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="font-medium text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Sign up for free
                </Link>
              </p>
              <Button
                variant="link"
                size="sm"
                className="p-0 h-auto text-purple-600 hover:text-purple-700"
              >
                <User className="h-4 w-4 mr-1 inline" />
                Why sign in?
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p className="flex items-center justify-center gap-1">
            <Lock className="h-4 w-4" />
            Your data is secure and private.
          </p>
          <p>
            Signing in gives you access to personalized recommendations and
            session history.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPrompt;
