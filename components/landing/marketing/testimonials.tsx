import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how construction companies are growing their business with
              BuildCRM.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-lg">
                Game Changer for Our Business
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                &quot;BuildCRM has completely transformed how we manage our
                construction projects. We&apos;ve increased our project
                completion rate by 40% and our client satisfaction scores are
                through the roof.&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-orange-600">
                    MJ
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Mike Johnson</div>
                  <div className="text-xs text-gray-600">
                    CEO, Johnson Construction
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-lg">Incredible ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                &quot;The lead tracking and client management features have
                helped us close 60% more deals. The ROI on BuildCRM paid for
                itself within the first month.&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-orange-600">
                    SR
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Sarah Rodriguez</div>
                  <div className="text-xs text-gray-600">
                    Owner, Rodriguez Builders
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <CardTitle className="text-lg">
                Perfect for Growing Teams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                &quot;As we&apos;ve grown from 5 to 50 employees, BuildCRM has
                scaled with us perfectly. The project coordination features keep
                everyone on the same page.&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-orange-600">
                    DT
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">David Thompson</div>
                  <div className="text-xs text-gray-600">
                    Project Manager, Elite Construction
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
