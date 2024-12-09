import React, { useState } from "react";

export default function BookingForm({
  onSubmit,
}: {
  onSubmit: (formData: { name: string; email: string; date: string; notes?: string }) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form bg-gray-900 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Book a Session</h2>

      <label className="block text-white mb-2">Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded"
        required
      />

      <label className="block text-white mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded"
        required
      />

      <label className="block text-white mb-2">Date</label>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded"
        required
      />

      <label className="block text-white mb-2">Notes</label>
      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded"
      />

      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white font-bold rounded"
      >
        Submit
      </button>
    </form>
  );
}