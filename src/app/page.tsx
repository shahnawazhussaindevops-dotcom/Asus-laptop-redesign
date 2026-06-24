import Navbar from "@/components/Navbar";
import ScrollCanvas from "@/components/ScrollCanvas";
import SocialProof from "@/components/SocialProof";
import SpecsSection from "@/components/SpecsSection";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollCanvas />
      <SocialProof />
      <SpecsSection />
      <GallerySection />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
