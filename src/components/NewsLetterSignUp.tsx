import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Auto-hide success message after 3 seconds

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { email }
      );
      setSuccess(true);
      setEmail(""); // Clear input
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
      console.error("EmailJS error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-purple-200 text-lg">Stay Updated</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm opacity-80">
          Subscribe for tips and offers.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-purple-500 flex-1"
            disabled={isLoading || success}
          />
          <Button
            type="submit"
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg min-w-[100px]"
            disabled={isLoading || success || !email}
          >
            {isLoading ? (
              "Subscribing..."
            ) : success ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
        {success && (
          <div className="text-green-300 text-xs space-y-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Thanks for subscribing!
            </div>
            <p className="text-yellow-200/80 border-2 rounded-lg py-2 px-0 mt-2 text-center">
              If you don't receive an email, please check your spam/junk folder.
            </p>
          </div>
        )}
        {error && (
          <p className="text-red-300 text-xs flex items-center gap-1 justify-center">
            <AlertCircle className="h-3 w-3" />
            {error}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;
