export default function NavBar() {
    const links = [
      { href: '#about-me', label: 'About Me' },
      { href: '#skills', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#testimonials', label: 'Testimonials' },
      { href: '#contact', label: 'Contact' },
    ];
  
    return (
      <nav className="navbar fixed top-0 w-full bg-gray-900 z-50 py-4">
        <ul className="flex justify-center space-x-8">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="text-gray-300 hover:text-neon transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  