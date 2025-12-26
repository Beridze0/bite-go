import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoLocationOutline } from "react-icons/io5";
import CurrentLocationBtn from "../../ui/CurrentLocationBtn";
import Modal from "./modal/Modal";

export default function AddressInput() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [autoLocate, setAutoLocate] = useState(false);

  function openModal(auto = false) {
    setAutoLocate(auto);
    setIsMounted(true);
    requestAnimationFrame(() => setIsVisible(true));
  }

  function closeModal() {
    setIsVisible(false);
    setAutoLocate(false);
  }

  useEffect(() => {
    if (!isVisible && isMounted) {
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isMounted]);

  return (
    <div className="flex items-center gap-13 border border-gray-300 bg-white w-fit py-1 px-2 rounded-lg">
      <div className="flex items-center gap-2" onClick={openModal}>
        <IoLocationOutline size={25} className="text-gray-500" />
        <p className="text-lg text-gray-500">What's your address?</p>
      </div>

      <CurrentLocationBtn onClick={() => openModal(true)} />

      {isMounted &&
        createPortal(
          <Modal
            isVisible={isVisible}
            closeModal={closeModal}
            autoLocate={autoLocate}
          />,
          document.body
        )}
    </div>
  );
}
