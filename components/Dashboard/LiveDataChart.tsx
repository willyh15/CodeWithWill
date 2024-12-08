import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { supabase } from "@/lib/supabaseClient";

const LiveDataChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Bookings Over Time",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from("bookings").select("*");

      if (!error && data) {
        const dates = data.map((booking) => booking.date);
        const dateCounts = dates.reduce((acc, date) => {
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(dateCounts),
          datasets: [
            {
              label: "Bookings",
              data: Object.values(dateCounts),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
          ],
        });
      }
    };

    fetchBookings();
  }, []);

  return <Line data={chartData} />;
};

export default LiveDataChart;