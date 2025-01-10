import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CalendarView from "@/components/Calender/CalenderView";
import { Modal } from "@/components/UI/Modal";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { useGlobalState } from "@/lib/globalState";
import DatePicker from "react-datepicker";

// Define the Booking type to align with Supabase's table schema
interface Booking {
  id: string; // UUID primary key
  name: string;
  email: string;
  date: string; // Date in ISO format
  notes?: string; // Optional notes field
  created_at: string; // Timestamp in ISO format
}

export const BookingCenter = () => {
  const { loading, modal, setLoading, setModal } = useGlobalState(); // Zustand hooks
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: new Date(), // Default to current date
  });

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("bookings").select("*");
      if (error) throw error;
      if (data) setBookings(data);
    } catch (error) {
      setModal({
        isVisible: true,
        type: "error",
        content: "Failed to fetch bookings. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("bookings").insert([
        {
          name: formData.name,
          email: formData.email,
          date: formData.date.toISOString(),
        },
      ]);
      if (error) throw error;

      setModal({
        isVisible: true,
        type: "success",
        content: "Your booking was successful!",
      });

      fetchBookings();
      setFormData({ name: "", email: "", date: new Date() });
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
    <div className="booking-center">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white">
        Booking Center
      </h1>

      {/* Booking Form */}
      <div className="mb-12">
        <form onSubmit={handleBookingSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="peer w-full p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="peer w-full p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="relative">
            <DatePicker
              selected={formData.date || new Date()} // Ensure valid date for `selected`
              onChange={(date) =>
                setFormData({ ...formData, date: date || new Date() })
              } // Handle `null` case in `onChange`
              className="peer w-full p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              calendarClassName="custom-calendar" // For custom styling
              placeholderText="Select Date"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 transition-all text-white py-4 rounded-lg shadow-lg shadow-blue-500/50"
            disabled={loading}
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>

      {/* Calendar View */}
      <div className="mb-12">
        <CalendarView bookings={bookings} />
      </div>

      {/* Modals and Loading */}
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
        content={modal.content || "No content available."}
      />
      <LoadingIndicator />
    </div>
  );
};