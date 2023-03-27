"use client"
import { useState } from 'react';
import ReactModal from 'react-modal';

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Buka Pop Up Form</button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Ini adalah Pop Up Form</h2>
        <p>Isi formulir di sini.</p>
        <button onClick={closeModal}>Tutup Pop Up Form</button>
      </ReactModal>
    </div>
  );
}

export default Modal;
