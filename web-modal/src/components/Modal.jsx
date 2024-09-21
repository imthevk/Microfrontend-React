import { useState } from "react";
import "./Modal.style.css";
import useClickAway from "../hooks/useClickAway";
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => setIsOpen(false));
  console.log(ref);
  const handleOpenModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <section>
        <h1>useClickAway</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={ref}>
          <button onClick={() => setIsOpen(false)}>X</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
}

export default Modal;
