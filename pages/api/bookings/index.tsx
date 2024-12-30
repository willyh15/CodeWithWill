import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Booking {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
}

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]); // Explicitly set the type
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase.from<Booking, unknown>("bookings").select("*"); // Provide both generic types
        if (error) throw error;
        setBookings(data || []); // Ensure fallback to an empty array
      } catch (err) {
        setError("Failed to fetch bookings.");
      }
    };

    fetchBookings();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <li key={booking.id}>
              {booking.name} - {booking.email} - {booking.date} - {booking.time}
            </li>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </ul>
    </div>
  );
};

export default Bookings;