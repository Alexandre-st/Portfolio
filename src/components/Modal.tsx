import { useRef, type Dispatch, type MouseEvent, type SetStateAction } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ setShowModal }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (evt: MouseEvent<HTMLDivElement>) => {
        if (evt.target === modalRef.current) {
            setShowModal(false);
        }
    };

    const portal = document.getElementById('portal');

    if (!portal) {
        return null;
    }

    return createPortal(
        <div className="modal" ref={modalRef} onClick={closeModal}>
            <div className="modal-container container">
                <h2>Merci de m'avoir contacté, je vous réponds au plus vite.</h2>
                <button className="modal-button" onClick={() => setShowModal(false)}>
                    X
                </button>
            </div>
        </div>,
        portal,
    );
};
