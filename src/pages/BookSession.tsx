import { useUser } from "@clerk/clerk-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BookSession = () => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/" replace />; // Or show sign in prompt
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your English Session
          </h1>
          <p className="text-xl text-gray-600">
            Choose from available time slots and start your personalized
            learning journey.
          </p>
        </div>
        <Card className="max-w-md mx-auto border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <CardTitle className="text-2xl">No Available Sessions</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="mb-6">
              There are currently no available sessions. Please check back later
              or contact us to schedule a custom session.
            </CardDescription>
            <Button asChild className="w-full mb-4">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookSession;
