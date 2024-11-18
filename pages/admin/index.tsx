import { useState } from "react";
import LivePreview from "@/components/Admin/LivePreview";

export default function Admin() {
  const [data, setData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-neon mb-6">Admin Panel</h1>
      <textarea
        onChange={handleInputChange}
        value={data}
        placeholder="Type here to update the live preview..."
        className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-neon"
      ></textarea>
      <LivePreview data={data} />
    </div>
  );
}