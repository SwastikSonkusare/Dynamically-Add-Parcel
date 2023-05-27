import React from "react";

import "./Parcels.css";

const Parcels = ({ data, handleCurrentParcel, color, parcel }) => {
  const parcelStyle = {
    backgroundColor: color,
  };

  return (
    <>
      <div
        className={
          data.currentParcel === parcel.name
            ? "parcel__container active"
            : "parcel__container"
        }
        onClick={() => handleCurrentParcel(parcel.name)}
      >
        <div style={parcelStyle} key={parcel.id}>
          {parcel.id}
        </div>
        <div>{parcel.name}</div>
      </div>
    </>
  );
};

export default Parcels;
