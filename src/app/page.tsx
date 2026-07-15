import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProp } from "@/components/ValueProp";
import { Capabilities } from "@/components/Capabilities";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Equipment } from "@/components/Equipment";
// import { Trust } from "@/components/Trust"; // hidden for now — re-enable once there's real testimonial/partner content
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-copper-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-concrete-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ValueProp />
        <Capabilities />
        <ProjectGallery />
        <Process />
        <About />
        <Equipment />
        {/* <Trust /> */}
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
