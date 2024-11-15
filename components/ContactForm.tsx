import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-neon mb-4">Contact Me</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-400">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-400">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-400">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-neon text-gray-900 font-bold rounded-lg hover:bg-neon-light transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
