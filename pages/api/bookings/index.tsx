import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase.from("bookings").select("*");
        if (error) throw error;
        setBookings(data || []);
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
