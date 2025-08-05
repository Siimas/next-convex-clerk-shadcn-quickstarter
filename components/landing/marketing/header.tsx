import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b backdrop-blur sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center">
        <Building2 className="h-8 w-8" />
        <span className="ml-2 text-xl font-bold">BuildCRM</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#features"
          className="text-sm font-medium transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium transition-colors"
        >
          Reviews
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium transition-colors"
        >
          Contact
        </Link>
      </nav>
      <div className="ml-6 flex gap-2">
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
        <Button size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
}
