import HeroSection from "@/components/Hero/HeroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import TechStack from "@/components/TechStack/TechStack";
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
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading this section.</h2>;
    }

    return this.props.children;
  }
}

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>
      <ErrorBoundary>
        <TechStack />
      </ErrorBoundary>
      <ErrorBoundary>
        <Testimonials />
      </ErrorBoundary>
      <ErrorBoundary>
        <BookingCTA />
      </ErrorBoundary>
      <ErrorBoundary>
        <ContactForm />
      </ErrorBoundary>
    </>
  );
}