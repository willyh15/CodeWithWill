import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Modal } from "@/components/UI/Modal";

const CancellationModal = ({ bookingId }: { bookingId: number }) => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCancellation = async () => {
    setLoading(true);

    try {
      const { error } = await supabase.from("bookings").delete().eq("id", bookingId);

      if (error) throw error;

      setResponseMessage("Booking canceled successfully.");
      setShowModal(true);
    } catch (error) {
      setResponseMessage("Failed to cancel booking. Please try again.");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCancellation}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? "Cancelling..." : "Cancel Booking"}
      </button>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="Cancellation Status"
        content={responseMessage}
      />
    </div>
  );
};

export default CancellationModal;