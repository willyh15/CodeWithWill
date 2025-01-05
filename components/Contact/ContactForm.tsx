import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const StarfieldCanvas = dynamic(() => import("@/components/Starfield/Starfield"), { ssr: false });

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for your message!");
  };

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <StarfieldCanvas color="#FFD700" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="contact-form bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-60 p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto backdrop-blur-md border border-gray-700 hover:shadow-neon transition duration-300 relative"
      >
        <h2 className="text-4xl font-extrabold text-neon mb-8 text-center drop-shadow-md">
          Contact Me
        </h2>

        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-300 mb-2">
            <FaUser className="inline-block mr-2 text-neon" />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-6 py-3 rounded-xl bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-light focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-2">
            <FaEnvelope className="inline-block mr-2 text-neon" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-6 py-3 rounded-xl bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-light focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-semibold text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-6 py-3 rounded-xl bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-light focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Write your message..."
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-neon-light to-yellow-500 text-gray-900 font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-neon transition-transform duration-300"
        >
          <FaPaperPlane className="mr-2" />
          Send Message
        </button>
      </form>
    </section>
  );
}