import React from 'react';
import { MdClose } from 'react-icons/md';

interface ModalProps {
  imageUrl: string | null; // Update imageUrl prop to accept null
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  if (!imageUrl) return null; // If imageUrl is null, don't render anything

  return (
    <div className="modal-overlay z-50" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <MdClose className="close-icon" onClick={handleClose} />
        <img src={imageUrl} alt="Full-size"  />
      </div>
    </div>
  );
};

export default Modal;
