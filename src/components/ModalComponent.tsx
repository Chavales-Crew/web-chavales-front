import React from "react";
import imagen from '../images/pikachuwaton.jpg'

interface ModalComponentProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent = ({ show, setShow }: ModalComponentProps) => {
  const display = show ? "block" : "none";

  return (
    <div style={{ display }}>
      <div className="modal-box bg-base-200 mx-auto">
        <img src={imagen} alt="" />
        <div className="modal-action">
          <label
            onClick={() => setShow(false)}
            htmlFor="my-modal-6"
            className="btn"
          >
            Yay!
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
