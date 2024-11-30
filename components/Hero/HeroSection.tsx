import React, { useEffect, useState } from "react";
import { fetchBackground } from "@/utils/fetchBackground";

const HeroSection: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    async function loadBackground() {
      try {
        const background = await fetchBackground("abstract"); // Pass the query here
        setBackgroundImage(background);
      } catch (error) {
        console.error("Failed to load background image:", error);
      }
    }

    loadBackground();
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero-section"
    >
      <div className="content">
        <h1>Welcome to the Hero Section</h1>
        <p>Dynamic background powered by Pexels API.</p>
      </div>
    </section>
  );
};

export default HeroSection;
