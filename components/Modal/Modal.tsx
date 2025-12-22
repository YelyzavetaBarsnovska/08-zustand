import { createPortal } from "react-dom";
import { useEffect } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
}
export default Modal;
