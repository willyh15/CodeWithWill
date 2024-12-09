import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CalendarView from "@/components/Calender/CalenderView";
import BookingForm from "@/components/BookingForm";
import { ModalWithVortex } from "@/components/ModalWithVortex";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { useGlobalState } from "@/lib/globalState";

interface Booking {
  id: string; // UUID type
  name: string;
  email: string;
  date: string; // Date in ISO format
  notes?: string; // Optional notes field
  created_at: string; // Timestamp in ISO format
}

export const BookingCenter = () => {
  const [modal, setModal] = useGlobalState("modal");
  const [loading, setLoading] = useGlobalState("loading");
  const [bookings, setBookings] = useState<Booking[]>([]); // Explicit type annotation

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from<Booking>("bookings")
        .select("*");
      if (error) throw error;
      if (data) setBookings(data); // Ensure data is not null
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

  const handleBookingSubmit = async (formData: Omit<Booking, "id" | "created_at">) => {
    setLoading(true);
    try {
      const { error } = await supabase.from("bookings").insert([formData]);
      if (error) throw error;

      setModal({
        isVisible: true,
        type: "success",
        content: "Your booking was successful!",
      });

      // Refresh bookings
      fetchBookings();
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

  return (
    <div className="booking-center">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white">
        Booking Center
      </h1>

      {/* Booking Form */}
      <div className="mb-12">
        <BookingForm onSubmit={handleBookingSubmit} />
      </div>

      {/* Calendar View */}
      <div className="mb-12">
        <CalendarView bookings={bookings} />
      </div>

      {/* Modals and Loading */}
      <ModalWithVortex />
      <LoadingIndicator />
    </div>
  );
};