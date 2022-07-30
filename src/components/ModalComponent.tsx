import React from "react";

interface ModalComponentProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent = ({ show, setShow }: ModalComponentProps) => {
  const display = show ? "block" : "none";

  return (
    <div style={{ display }}>
      <div className="modal-box bg-base-200 mx-auto">
        <h3 className="font-bold text-lg">
          Congratulations random Internet user!
        </h3>
        <p className="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
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
