import React from "react";

const CalendarModal = () => {
  return (
    <>
      <button
        className="btn tracking-widest"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        ADD EVENT
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CalendarModal;