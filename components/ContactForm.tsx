import { useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div id="contact" className="contact-form py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-neon mb-8">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="peer w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none"
            placeholder=" "
            required
          />
          <label className="absolute text-gray-400 top-0 left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 transition-all">
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="peer w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none"
            placeholder=" "
            required
          />
          <label className="absolute text-gray-400 top-0 left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 transition-all">
            Email
          </label>
        </div>
        <div className="relative">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="peer w-full h-32 px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none"
            placeholder=" "
            required
          ></textarea>
          <label className="absolute text-gray-400 top-0 left-3 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 transition-all">
            Message
          </label>
        </div>
        <button type="submit" className="cta-button">Send Message</button>
      </form>
    </div>
  );
}
