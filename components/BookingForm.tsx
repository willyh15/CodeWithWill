import React, { useState } from "react";

export default function BookingForm() {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit booking");

      alert("Booking submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your booking.");
    }
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