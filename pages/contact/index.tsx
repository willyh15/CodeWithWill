import dynamic from "next/dynamic";

const DynamicContactForm = dynamic(() => import("@/components/Contact/ContactForm"), { ssr: false });

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <DynamicContactForm />
    </div>
  );
}