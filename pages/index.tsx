import React from "react";
import HeroSection from "@/components/Hero/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import TechStack from "@/components/TechStack/TechStack";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactForm from "@/components/Contact/ContactForm";
import { BookingCenter } from "@/components/Booking/BookingCenter"; // Import BookingCenter

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <TechStack />
      <Testimonials />
      <BookingCenter /> {/* Replace BookingCTA */}
      <ContactForm />
    </>
  );
}