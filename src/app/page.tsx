import Navbar from "@/components/Navbar";
import ScrollCanvas from "@/components/ScrollCanvas";
import InfoStrip from "@/components/InfoStrip";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollCanvas />
      <InfoStrip />
      <StorySection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}
