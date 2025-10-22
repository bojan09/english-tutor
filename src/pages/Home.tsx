import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master English
            <span className="block text-purple-600">with Expert Guidance</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlock your potential with personalized English tutoring.
            Professional lessons, flexible scheduling, and dedicated support for
            your language learning journey.
          </p>
          <div className="space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-xl px-8 py-4"
            >
              <Link to="/book-session">Book Your First Session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-xl px-8 py-4"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose EnglishMentor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine proven teaching methods with modern technology to
              deliver exceptional learning experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <CardTitle>Personalized Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lessons designed to your learning style and goals.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Book sessions at times that work best for your busy schedule.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <CardTitle>Direct Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Direct email contact with quick auto-reply responses.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👩‍🏫</span>
                </div>
                <CardTitle>Expert Instruction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn from experienced English teachers with proven results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-purple-50 shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "Highly personalized approach."
                </p>
                <p className="font-semibold">Sarah Johnson</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-blue-50 shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "Flexible scheduling made it easy."
                </p>
                <p className="font-semibold">Miguel Rodriguez</p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-green-50 shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "Professional and effective teaching."
                </p>
                <p className="font-semibold">Li Wei</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What You'll Get
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <CardTitle>Personalized Lessons</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Tailored to your level and learning goals.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍🏫</span>
                </div>
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Learn from experienced English teachers.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Easy booking and rescheduling options.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your English Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied students who have improved their English
            with our expert guidance.
          </p>
          <div className="space-x-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Link to="/book-session">Book a Session</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
