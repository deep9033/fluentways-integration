
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, User, Clock, Target, BarChart, ArrowRight } from "lucide-react";

const Index = () => {
  const demoFeatures = [
    {
      icon: User,
      title: "20 mins pure speaking",
      description: "No theory. Just you talking with a real trainer."
    },
    {
      icon: CheckCircle,
      title: "Real-time corrections",
      description: "Get fixed instantly. Learn while you speak."
    },
    {
      icon: Target,
      title: "Know your weak points",
      description: "Walk away knowing exactly what to fix."
    },
    {
      icon: BarChart,
      title: "Get a custom plan",
      description: "Your personal roadmap to fluency."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Meetings mein bolta nahi tha. Now I speak up confidently.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c433?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rahul Verma", 
      role: "Marketing Manager",
      content: "Interview ke liye fluency chahiye thi. FluentWays made it happen in 2 months.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sneha Patel",
      role: "Business Analyst", 
      content: "Finally someone who gets it. No grammar lectures, just real speaking practice.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const improvements = [
    "Fluency",
    "Grammar accuracy", 
    "Sentence formation",
    "Confidence",
    "Pronunciation"
  ];

  const comparisons = [
    {
      others: "AI Practice",
      fluentways: "Real Human Feedback",
      othersIcon: X,
      fluentwaysIcon: CheckCircle
    },
    {
      others: "Group Classes",
      fluentways: "1-on-1 Personal Attention", 
      othersIcon: X,
      fluentwaysIcon: CheckCircle
    },
    {
      others: "Generic Lessons",
      fluentways: "Custom Speaking Plans",
      othersIcon: X,
      fluentwaysIcon: CheckCircle
    },
    {
      others: "Theory Heavy",
      fluentways: "Practice Focused",
      othersIcon: X,
      fluentwaysIcon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            FluentWays
          </div>
          <Button className="bg-[#FF5C00] hover:bg-[#e54f00] text-white px-6">
            Book Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Speak English.<br />
            Without Fear.<br />
            <span className="text-[#FF5C00]">Without Thinking Twice.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            1-on-1 English speaking practice. With a personal coach. 
            <span className="font-semibold text-[#FF5C00]"> Just ₹9 to begin.</span>
          </p>

          <Button size="lg" className="bg-[#FF5C00] hover:bg-[#e54f00] text-white text-lg px-12 py-6 mb-8">
            Try a ₹9 Demo
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>

          <p className="text-sm text-gray-500">
            No signup fees. No course pressure. Just speak.
          </p>
        </div>
      </section>

      {/* What Happens in the Demo */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Happens in Your ₹9 Demo
            </h2>
            <p className="text-xl text-gray-600">
              20 minutes that will change how you see your English
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#FF5C00] rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600">
              The English partner that speaks with you. Not at you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 bg-gray-50 text-center font-semibold text-gray-700">
                Others
              </div>
              <div className="p-6 text-center font-semibold text-gray-400">
                vs
              </div>
              <div className="p-6 bg-[#FF5C00] text-center font-semibold text-white">
                FluentWays
              </div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-3 gap-0 border-t border-gray-100">
                <div className="p-6 flex items-center justify-center space-x-3">
                  <comparison.othersIcon className="h-5 w-5 text-red-500" />
                  <span className="text-gray-700">{comparison.others}</span>
                </div>
                <div className="p-6 flex items-center justify-center">
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <div className="p-6 flex items-center justify-center space-x-3">
                  <comparison.fluentwaysIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-900 font-medium">{comparison.fluentways}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real People. Real Results.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Improve */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Improve
            </h2>
            <p className="text-xl text-gray-600">
              Every conversation gets you closer to fluency
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {improvements.map((improvement, index) => (
              <div key={index} className="text-center">
                <div className="w-3 h-3 bg-[#FF5C00] rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900">{improvement}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 1-on-1 Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why 1-on-1 Works
          </h2>
          <div className="text-xl text-gray-700 leading-relaxed space-y-4">
            <p>
              You can't hide in a corner. You have to speak.
            </p>
            <p>
              Your trainer knows your exact problems and fixes them in real-time.
            </p>
            <p>
              No judgment, no rush, no one else listening.
            </p>
            <p className="font-semibold text-[#FF5C00]">
              Just you, your trainer, and the confidence that grows with every conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-4 bg-[#FF5C00]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Start your transformation.<br />
            ₹9 is all it takes.
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            Galti karo. Par bolte raho.
          </p>
          <Button size="lg" className="bg-white text-[#FF5C00] hover:bg-gray-100 text-lg px-12 py-6 font-semibold">
            Book Demo Session
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-semibold text-white mb-6 md:mb-0">
              FluentWays
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 FluentWays. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-40">
        <Button className="w-full bg-[#FF5C00] hover:bg-[#e54f00] text-white py-4 text-lg font-semibold">
          Try ₹9 Demo Now
        </Button>
      </div>
    </div>
  );
};

export default Index;
