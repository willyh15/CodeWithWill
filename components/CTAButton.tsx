export function CTAButton({ text, href }: { text: string; href: string }) {
    return (
      <a
        href={href}
        className="cta-button relative overflow-hidden text-center px-8 py-3 rounded-lg bg-neon text-gray-900 font-bold hover:bg-neon-light transition-colors"
      >
        <span className="absolute inset-0 bg-neon opacity-20 rounded-full animate-ping" />
        {text}
      </a>
    );
  }
  