import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Modal } from "@/components/UI/Modal";

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.from("bookings").insert([
        {
          name: formData.name,
          email: formData.email,
          date: formData.date,
        },
      ]);

      if (error) throw error;

      setResponseMessage("Booking confirmed successfully!");
      setShowModal(true);
      setFormData({ name: "", email: "", date: "" });
    } catch (error) {
      setResponseMessage("Failed to confirm booking. Please try again.");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form">
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg"
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Select Date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg"
          disabled={loading}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="Booking Status"
        content={responseMessage}
      />
    </div>
  );
};

export default BookingForm;