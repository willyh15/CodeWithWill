import React, { useState } from "react";

interface BookingFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    date: string;
    time: string;
  }) => void;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

      <label className="block text-white mb-2">Time</label>
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded"
        required
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