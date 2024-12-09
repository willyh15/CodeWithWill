import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";
import { supabase } from "@/lib/supabaseClient";

// Register required components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LiveDataChart = () => {
  const [chartData, setChartData] = useState({
    labels: [], // X-axis labels
    datasets: [
      {
        label: "Bookings Over Time",
        data: [], // Y-axis data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from("bookings").select("*");

      if (!error && data) {
        const dates = data.map((booking) => booking.date);
        const dateCounts = dates.reduce((acc: { [x: string]: any; }, date: string | number) => {
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(dateCounts), // Unique dates as X-axis labels
          datasets: [
            {
              label: "Bookings",
              data: Object.values(dateCounts), // Number of bookings per date
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 2,
              fill: true,
            },
          ],
        });
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="chart-container">
      <h2 className="text-xl font-bold text-center mb-4">Bookings Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LiveDataChart;
