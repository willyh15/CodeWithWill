import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from('bookings').select('*');
      if (error) {
        alert('Error fetching bookings');
      } else {
        setBookings(data);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.name} - {booking.email} - {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;