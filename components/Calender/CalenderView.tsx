import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const CalendarView = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from("bookings").select("*");
      if (!error) setBookings(data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="calendar-view">
      <h2 className="text-3xl font-bold text-center mb-6">Your Bookings</h2>
      <div className="grid grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border p-4 rounded-lg shadow-md bg-gray-50"
          >
            <h3 className="text-xl font-bold">{booking.name}</h3>
            <p>{booking.email}</p>
            <p>{new Date(booking.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;