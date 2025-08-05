import Image from "next/image";

export function Stats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Trusted by Construction Leaders
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of construction companies who have transformed
                their business operations with BuildCRM.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold">5,000+</div>
                <div className="text-sm">
                  Construction Companies
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">$2.5B+</div>
                <div className="text-sm">Projects Managed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">
                  Customer Satisfaction
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">35%</div>
                <div className="text-sm">
                  Average Revenue Increase
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src=""
              width="600"
              height="400"
              alt="Construction professionals using BuildCRM"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
