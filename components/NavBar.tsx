import { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about-me", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
        isScrolled
          ? "bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } z-50`}
    >
      <ul className="flex justify-center space-x-8 py-4 text-gray-300">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="hover:text-neon transition-colors duration-200 text-lg font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
