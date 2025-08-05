import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Calendar, FileText, TrendingUp, Shield, Building2 } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Built for Construction Professionals
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage projects, clients, and grow your construction business in one powerful
                  platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <Users className="h-10 w-10 text-orange-600" />
                  <CardTitle>Client Management</CardTitle>
                  <CardDescription>
                    Keep track of all your clients, their contact information, project history, and communication
                    preferences in one place.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-orange-600" />
                  <CardTitle>Project Scheduling</CardTitle>
                  <CardDescription>
                    Plan and schedule projects, assign crews, track progress, and ensure deadlines are met with our
                    advanced scheduling tools.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <FileText className="h-10 w-10 text-orange-600" />
                  <CardTitle>Document Management</CardTitle>
                  <CardDescription>
                    Store contracts, permits, blueprints, and other important documents securely with easy access from
                    any device.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-orange-600" />
                  <CardTitle>Lead Tracking</CardTitle>
                  <CardDescription>
                    Track leads from initial contact to project completion. Never lose a potential client with automated
                    follow-ups.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <Shield className="h-10 w-10 text-orange-600" />
                  <CardTitle>Compliance Tracking</CardTitle>
                  <CardDescription>
                    Stay compliant with industry regulations, track certifications, and manage safety requirements
                    effortlessly.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-orange-200 transition-colors">
                <CardHeader>
                  <Building2 className="h-10 w-10 text-orange-600" />
                  <CardTitle>Job Site Management</CardTitle>
                  <CardDescription>
                    Coordinate multiple job sites, track equipment, manage subcontractors, and monitor project costs in
                    real-time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
  );
}