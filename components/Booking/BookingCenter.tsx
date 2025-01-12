import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Default Flatpickr styles
import "@/styles/flatpickr-dark.css"; // Custom dark mode styles
import { Modal } from "@/components/UI/Modal";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { useGlobalState } from "@/lib/globalState";

interface Booking {
  id: string;
  name: string;
  email: string;
  date: string;
  notes?: string;
  created_at: string;
}

export const BookingCenter = () => {
  const { loading, modal, setLoading, setModal } = useGlobalState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("bookings").insert([
        {
          name: formData.name,
          email: formData.email,
          date: formData.date,
        },
      ]);
      if (error) throw error;

      setModal({
        isVisible: true,
        type: "success",
        content: "Your booking was successful!",
      });

      setFormData({ name: "", email: "", date: "" });
    } catch (error) {
      setModal({
        isVisible: true,
        type: "error",
        content: "Failed to submit booking. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="booking" className="booking-center">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white">
        Booking Center
      </h1>

      <form onSubmit={handleBookingSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="peer w-full p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="peer w-full p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <div className="relative flex justify-center items-center">
          <Flatpickr
            value={formData.date}
            onChange={(selectedDates) =>
              setFormData({ ...formData, date: selectedDates[0].toISOString() })
            }
            options={{
              enableTime: false,
              dateFormat: "Y-m-d",
              disableMobile: true, // Ensures consistent desktop-like calendar
            }}
            className="peer w-full p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-4 rounded-lg shadow-lg shadow-blue-500/50"
          disabled={loading}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>

      {/* Modals */}
      <Modal
        isVisible={modal.isVisible}
        onClose={() =>
          setModal({
            isVisible: false,
            type: null,
            content: "",
          })
        }
        title={modal.type === "success" ? "Success" : "Error"}
        content={modal.content || ""}
      />

      {/* Loading Indicator */}
      {loading && <LoadingIndicator />}
    </div>
  );
};