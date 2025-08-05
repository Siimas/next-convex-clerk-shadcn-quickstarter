import { CTA } from "@/components/landing/marketing/cta";
import { Features } from "@/components/landing/marketing/features";
import { Footer } from "@/components/landing/marketing/footer";
import { Header } from "@/components/landing/marketing/header";
import { Hero } from "@/components/landing/marketing/hero";
import { Stats } from "@/components/landing/marketing/stats";
import { Testimonials } from "@/components/landing/marketing/testimonials";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer/>
    </div>
  );
}
