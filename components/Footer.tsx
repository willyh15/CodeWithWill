import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg py-10 px-4 border-t border-gray-700 text-center relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="footer-glow"></div>
      </div>
      <div className="relative">
        <p className="text-gray-400 text-lg mb-6 font-semibold tracking-wide">
          Let's Connect
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="text-gray-400 hover:text-neon-light transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/yourusername"
            className="text-gray-400 hover:text-neon-light transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/yourprofile"
            className="text-gray-400 hover:text-neon-light transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork Profile"
          >
            <FaExternalLinkAlt size={30} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
