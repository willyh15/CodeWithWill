import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import CalendarView from "@/components/Calender/CalenderView";
import BookingForm from "@/components/BookingForm";
import { ModalWithVortex } from "@/components/ModalWithVortex";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { useGlobalState } from "@/lib/globalState";

export const BookingCenter = () => {
  const [modal, setModal] = useGlobalState("modal");
  const [loading, setLoading] = useGlobalState("loading");
  const [bookings, setBookings] = useState([]);

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

  const handleBookingSubmit = async (formData: {
    name: string;
    email: string;
    date: string;
    time: string;
  }) => {
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