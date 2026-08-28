import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import News from "@/components/News";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Hero />
        <Introduction />
        <Services />
        <Mission />
        <News />
      </main>

      <Footer />
    </>
  );
}