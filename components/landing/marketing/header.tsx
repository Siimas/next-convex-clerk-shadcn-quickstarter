import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center">
        <Building2 className="h-8 w-8 text-orange-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">BuildCRM</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#features"
          className="text-sm font-medium hover:text-orange-600 transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium hover:text-orange-600 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium hover:text-orange-600 transition-colors"
        >
          Reviews
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:text-orange-600 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <div className="ml-6 flex gap-2">
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
          Get Started
        </Button>
      </div>
    </header>
  );
}
