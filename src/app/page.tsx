import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Specialties from "@/components/Specialties";
import ImplantsHighlight from "@/components/ImplantsHighlight";
import FearSection from "@/components/FearSection";
import About from "@/components/About";
import Transformations from "@/components/Transformations";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <Specialties />
        <ImplantsHighlight />
        <FearSection />
        <About />
        <Transformations />
        <Differentials />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
