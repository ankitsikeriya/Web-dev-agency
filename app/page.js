import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import WhatsAppChat from "./components/WhatsAppChat";

export default function Home() {
  return ( 
    <main className="min-h-screen relative">
      <CustomCursor />
      <div className="circuit-bg">
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact /> 
      <Testimonials />
      <WhatsAppChat />
      <Footer />
    </main>
  );
}
