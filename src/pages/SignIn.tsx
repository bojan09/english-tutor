import { SignIn } from "@clerk/clerk-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
            <span className="text-white text-xl">📖</span>
          </div>
          <Card className="bg-white shadow-md">
            <CardHeader className="text-center">
              <p className="text-sm text-gray-600 mt-2">
                Welcome back to EnglishMentor
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <SignIn
                forceRedirectUrl="/book-session" // Updated prop
                appearance={{
                  elements: {
                    formButtonPrimary:
                      "bg-purple-600 hover:bg-purple-700 text-white w-full",
                    footerAction: "text-purple-600 hover:underline",
                  },
                }}
              />
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
