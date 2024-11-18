import { useState, useEffect } from "react";

const LivePreview = ({ data }: { data: string }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(data);
  }, [data]);

  return (
    <div className="live-preview bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-neon mb-4">Live Preview</h3>
      <div className="preview-content text-gray-300">
        {content || "No data available"}
      </div>
    </div>
  );
};

export default LivePreview;