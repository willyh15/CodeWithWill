import React, { ReactNode } from "react"; // Import React and types
import HeroSection from "@/components/Hero/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import TechStack from "@/components/TechStack/TechStack";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactForm from "@/components/Contact/ContactForm";
import BookingCTA from "@/components/Booking/BookingCTA";

// Define props and state interfaces
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
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
