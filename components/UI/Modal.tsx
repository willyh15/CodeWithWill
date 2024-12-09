import React from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, onClose, title, content }) => {
  if (!isVisible) return null;

  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal-content bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{content}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};
