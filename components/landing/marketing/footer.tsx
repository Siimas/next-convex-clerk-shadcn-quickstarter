import Link from "next/link";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
      <div className="flex items-center gap-2">
        <Building2 className="h-6 w-6 text-orange-600" />
        <span className="font-bold text-gray-900">BuildCRM</span>
      </div>
      <p className="text-xs text-gray-600 sm:ml-4">
        © 2024 BuildCRM. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4 text-gray-600"
        >
          Support
        </Link>
      </nav>
    </footer>
  );
}
