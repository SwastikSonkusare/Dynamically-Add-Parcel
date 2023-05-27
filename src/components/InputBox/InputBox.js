import React from "react";

import "./InputBox.css";

const InputBox = ({ data, handleChange }) => {
  return (
    <>
      <div className="show-input">
        <div>
          <div className="show-input__container">
            <label>Enter Name:</label>
            <input
              name="input"
              type="text"
              value={data.input}
              onChange={handleChange}
            />
          </div>
          <div className="show-input__container">
            <label>Select Location Group:</label>
            <select
              name="location"
              value={data.location}
              onChange={handleChange}
            >
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>
        </div>

        <div className="show-legend">
          <div>
            <h4>Mumbai</h4>
            <span></span>
          </div>

          <div>
            <h4>Kolkata</h4>
            <span></span>
          </div>

          <div>
            <h4>Delhi</h4>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
