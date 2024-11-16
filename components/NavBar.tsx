import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

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
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo or Brand */}
        <div className="text-neon font-bold text-2xl">MyPortfolio</div>

        {/* Hamburger Icon */}
        <button
          className="text-gray-300 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-8 text-gray-300">
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
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-full bg-gray-900 bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-gray-300 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            onClick={() => setIsOpen(false)} // Close menu on link click
            className="text-2xl font-semibold hover:text-neon transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}