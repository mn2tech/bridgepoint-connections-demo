import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { CommunityBand } from "@/components/CommunityBand";
import { PathwayFinder } from "@/components/PathwayFinder";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Mission />
        <Services />
        <WhyChoose />
        <CommunityBand />
        <PathwayFinder />
        <UpcomingEvents />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
      <Chatbot />
    </>
  );
}
