export default function NavBar() {
  const links = [
    { href: "#about-me", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-gray-300 py-4 shadow-md z-50">
      <ul className="flex justify-center space-x-8">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="hover:text-neon transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
