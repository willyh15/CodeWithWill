import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  content: string | ReactNode; // Allow ReactNode for content
}

export const Modal: React.FC<ModalProps> = ({ isVisible, onClose, title, content }) => {
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{content}</div> {/* Safely render ReactNode */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
