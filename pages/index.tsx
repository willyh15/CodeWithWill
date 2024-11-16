import NavBar from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  console.log(NavBar, HeroSection, AboutMe, Skills, TechStack, Projects, Testimonials, ContactForm, Footer);

  return (
    <main className="space-y-16">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <TechStack />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}