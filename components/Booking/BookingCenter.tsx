import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CalendarView from "@/components/Calender/CalenderView";
import { Modal } from "@/components/UI/Modal";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { useGlobalState } from "@/lib/globalState";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

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
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null as DayValue,
  });

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("bookings").select("*");
      if (error) throw error;
      setBookings(data);
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
          date: formData.date
            ? `${formData.date.year}-${formData.date.month}-${formData.date.day}`
            : "",
        },
      ]);
      if (error) throw error;

      setModal({
        isVisible: true,
        type: "success",
        content: "Your booking was successful!",
      });

      fetchBookings();
      setFormData({ name: "", email: "", date: null });
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
          <Calendar
            value={formData.date}
            onChange={(date) => setFormData({ ...formData, date })}
            shouldHighlightWeekends
            colorPrimary="#1E40AF"
            calendarClassName="futuristic-calendar"
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
    </div>
  );
};