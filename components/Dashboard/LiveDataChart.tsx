import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { supabase } from "@/lib/supabaseClient";

// Register required components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Define the Booking type
interface Booking {
  id: string;
  name: string;
  email: string;
  date: string; // Date in ISO format
  notes?: string;
  created_at: string;
}

// Define the type for chart data
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
    fill: boolean;
  }[];
}

const LiveDataChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
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
      const { data, error } = await supabase.from<Booking>("bookings").select("*");

      if (!error && data) {
        const dates = data.map((booking: Booking) => booking.date);
        const dateCounts = dates.reduce((acc: { [x: string]: number }, date: string) => {
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
