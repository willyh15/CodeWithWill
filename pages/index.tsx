import React from "react"; // Add this line to explicitly import React
import HeroSection from "@/components/Hero/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import TechStack from "@/components/TechStack/TechStack";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactForm from "@/components/Contact/ContactForm";
import BookingCTA from "@/components/Booking/BookingCTA";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default function Home() {
  return (
    <ErrorBoundary>
      <HeroSection />
      <Projects />
      <Skills />
      <TechStack />
      <Testimonials />
      <BookingCTA />
      <ContactForm />
    </ErrorBoundary>
  );
}
