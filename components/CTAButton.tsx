export function CTAButton({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-neon-light to-yellow-500 text-gray-900 font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 opacity-20 blur-md rounded-lg" />
      <span className="relative z-10">{text}</span>
    </a>
  );
}
