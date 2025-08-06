"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ChevronDown,
  Calculator,
  FileText,
  Users,
  BarChart3,
  Upload,
  Zap,
  Download,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function ConstructionCRMLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnnual, setIsAnnual] = useState(false);

  const testimonials = [
    {
      quote:
        "BuildSmart transformed our estimation process. What used to take days now takes hours.",
      author: "Sarah Chen",
      company: "Premier Construction Co.",
      rating: 5,
      initials: "SC",
    },
    {
      quote:
        "The automation features have increased our accuracy by 40% and saved countless hours.",
      author: "Mike Rodriguez",
      company: "Rodriguez Builders",
      rating: 5,
      initials: "MR",
    },
    {
      quote:
        "Finally, a CRM that understands construction. The workflow is intuitive and powerful.",
      author: "Jennifer Walsh",
      company: "Walsh Construction Group",
      rating: 5,
      initials: "JW",
    },
  ];

  const features = [
    {
      icon: Calculator,
      title: "Smart Estimating",
      description:
        "AI-powered cost calculations with real-time material pricing",
    },
    {
      icon: FileText,
      title: "Project Management",
      description: "Track progress, deadlines, and deliverables in one place",
    },
    {
      icon: Users,
      title: "Client Relations",
      description:
        "Manage leads, proposals, and client communications seamlessly",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Gain insights with detailed reports and performance metrics",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: isAnnual ? 29 : 39,
      description: "Perfect for small contractors",
      features: [
        "Up to 10 projects",
        "Basic estimating tools",
        "Email support",
        "Mobile app access",
      ],
    },
    {
      name: "Pro",
      price: isAnnual ? 79 : 99,
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced estimating",
        "Priority support",
        "Team collaboration",
        "Custom reports",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: isAnnual ? 149 : 199,
      description: "For large construction firms",
      features: [
        "Everything in Pro",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "Training included",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-slate-800">BuildSmart</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-16">
        <div className="absolute inset-0 bg-[url('/construction-site-aerial.png')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
              Build Smarter,
              <span className="text-orange-500 block">Estimate Faster</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Streamline your construction business with AI-powered estimating,
              project management, and client relations—all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link
                href="#demo"
                className="text-slate-600 hover:text-orange-500 font-medium text-lg flex items-center transition-colors"
              >
                Watch Demo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful tools designed specifically for construction
              professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                    <feature.icon className="h-6 w-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Illustration */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-slate-600">
              From project specs to final report in minutes, not hours
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting lines */}
              <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-orange-300 to-orange-500"></div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                  <Upload className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Input Specs
                </h3>
                <p className="text-slate-600">
                  Upload plans, add materials, and define project parameters
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                  <Zap className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Auto-Calculate
                </h3>
                <p className="text-slate-600">
                  AI analyzes data and generates accurate cost estimates
                  instantly
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                  <Download className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Export Report
                </h3>
                <p className="text-slate-600">
                  Download professional proposals and detailed breakdowns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600">
              See what construction professionals are saying about BuildSmart
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-2xl text-slate-700 mb-8 leading-relaxed">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonials[currentTestimonial].initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-800">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-slate-600">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-orange-500"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Flexible pricing that grows with your business
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`text-sm ${!isAnnual ? "text-slate-800 font-medium" : "text-slate-500"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isAnnual ? "bg-orange-500" : "bg-slate-300"
                }`}
              >
                <div
                  className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span
                className={`text-sm ${isAnnual ? "text-slate-800 font-medium" : "text-slate-500"}`}
              >
                Annual
              </span>
              {isAnnual && (
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  Save 25%
                </Badge>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all ${
                  plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-slate-800">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="text-4xl font-bold text-slate-800">
                    ${plan.price}
                    <span className="text-lg font-normal text-slate-500">
                      /{isAnnual ? "month" : "month"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                  <Button
                    className={`w-full mt-8 ${
                      plan.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Signup */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Join thousands of construction professionals who trust BuildSmart
            </p>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="h-12 text-lg border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="h-12 text-lg border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <Input
                    placeholder="Company Name"
                    className="h-12 text-lg border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg rounded-xl"
                  >
                    Start Your Free Trial
                  </Button>
                  <p className="text-sm text-slate-500 text-center">
                    By signing up, you agree to our Terms of Service and Privacy
                    Policy. No credit card required for the 14-day free trial.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">BuildSmart</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                The complete construction CRM platform for modern contractors
                and builders.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} BuildSmart. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
