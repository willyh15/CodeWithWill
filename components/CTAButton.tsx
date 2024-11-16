import { FaArrowRight } from "react-icons/fa";

export function CTAButton({
  text,
  href,
  withIcon = false,
}: {
  text: string;
  href: string;
  withIcon?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-neon-light to-yellow-500 text-gray-900 font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 opacity-20 blur-md rounded-lg"></span>
      <span className="relative z-10 flex items-center space-x-2">
        <span>{text}</span>
        {withIcon && (
          <FaArrowRight className="text-gray-900 group-hover:translate-x-1 transition-transform duration-300" />
        )}
      </span>
    </a>
  );
}