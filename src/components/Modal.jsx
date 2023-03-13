import { useRef } from "react";
import ReactDom from "react-dom";

export const Modal = ({ setShowModal }) => {

  const modalRef = useRef();

  const closeModal = (evt) => {
    if (evt.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal (
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modal-container container">
        <h2>Merci de m'avoir contacté, je vous réponds au plus vite.</h2>
        <button className="modal-button" onClick={() => setShowModal(false)}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
 