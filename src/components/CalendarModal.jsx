import React, { useState } from "react";

const CalendarModal = ({ setEventTitle }) => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    e.preventDefault();
    setEventTitle(name);
  };
  const handleInput = (e) => {
    const name = e.target.value;
    setName(name);
  };
  return (
    <>
      <button
        className="btn tracking-widest -mt-8 mb-10 hover:scale-105 font-bold py-2 px-4 "
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        ADD EVENT
      </button>
      <dialog id="my_modal_1" className="modal modal-close">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <form className="bg-base-200 rounded-md px-8 py-4 items-center">
            <div className="form-control ">
              <label htmlFor="title" className="label">
                <span className="label-text capitalize">Event Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Insert your event title..."
                className={`input input-bordered `}
                value={name}
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-sm "
              onSubmit={handleSubmit}
            >
              search
            </button>
          </form>
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
