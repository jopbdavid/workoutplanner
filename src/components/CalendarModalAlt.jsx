import React, { useState } from "react";

const CalendarModalAlt = ({ isOpen, setEventTitle }) => {
  const [formData, setFormData] = useState({ title: "", start: "" });
  const handleSubmit = () => {
    e.preventDefault();
    // setEventTitle();
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <h2 className="font-bold text-lg">Fill out the form</h2>
        <form
          className="bg-base-200 rounded-md px-8 py-4 items-center"
          onSubmit={handleSubmit}
        >
          <div className="form-control">
            <label htmlFor="title" className="label">
              <span className="label-text capitalize">Event Title:</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="Insert your event title..."
              className={`input input-bordered `}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-sm ">
            Submit
          </button>
        </form>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalendarModalAlt;
