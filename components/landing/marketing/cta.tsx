import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Transform Your Construction Business?
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of construction professionals who trust BuildCRM to
              manage their projects and grow their business.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="max-w-lg flex-1"
              />
              <Button
                type="submit"
                variant="secondary"
              >
                Get Started
              </Button>
            </form>
            <p className="text-xs text-orange-100">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
