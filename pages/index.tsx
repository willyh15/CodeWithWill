import HeroSection from "@/components/Hero/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import TechStack from "@/components/TechStack/TechStack";
import ContactForm from "@/components/Contact/ContactForm";
import BookingCTA from "@/components/Booking/BookingCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <TechStack />
      <Testimonials />
      <BookingCTA />
      <ContactForm />
    </>
  );
}