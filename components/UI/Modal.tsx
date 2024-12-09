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
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default function Modal;
