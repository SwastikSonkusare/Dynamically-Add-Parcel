import React, { useState } from "react";

import CTA from "../CTA/CTA";
import Parcels from "../Parcels/Parcels";
import InputBox from "../InputBox/InputBox";
import Header from "../Header/Header";

import { initialData } from "../../data";
import "./Home.css";

const Home = () => {
  const initialValues = {
    input: "",
    location: "Mumbai",
    currentParcel: "",
  };
  const [divElements, setDivElements] = useState([...initialData]);
  const [data, setData] = useState(initialValues);
  let groupParcels = {};

  divElements.forEach((parcel) => {
    if (!groupParcels[parcel.group]) {
      groupParcels[parcel.group] = [];
    }
    groupParcels[parcel.group].push(parcel);
  });

  const initialWidths = {
    Mumbai: `${groupParcels["Mumbai"]?.length}00px`,
    Delhi: `${groupParcels["Delhi"]?.length}00px`,
    Kolkata: `${groupParcels["Kolkata"]?.length}00px`,
  };
  const [headerWidth, setHeaderWidth] = useState(initialWidths);

  const showInputHandler = (idx, currentParcel) => {
    if (currentParcel === "" && idx === 3 && idx !== 4 && idx !== 5) {
      alert("Select any parcel first");
      return "";
    }

    if (
      data.input.trim() === "" &&
      data.location.trim() === "" &&
      idx !== 3 &&
      (idx !== 4) & (idx !== 5)
    ) {
      alert("Enter name or location");
      return "";
    }

    if (idx === 0 || idx === 1 || idx === 2 || idx === 3) {
      handleParcel(currentParcel, idx);
    } else if (idx === 4) {
      window.location.reload();
    } else {
      console.log(divElements);
    }
  };

  const handleParcel = (currentParcel, idx) => {
    const parcelIndex = divElements.findIndex(
      (parcel) => parcel.name === currentParcel
    );

    const selectedParcel = divElements[parcelIndex];

    if (
      (data.input.trim() !== "" && data.location.trim() !== "") ||
      idx === 3
    ) {
      let obj = {
        id: Math.floor(Math.random() * 100 + 1),

        name: data.input,

        sequence: 0,

        group: data.location,
      };

      const newDivElements = [...divElements];
      const newHeaderWidth = { ...headerWidth };

      newHeaderWidth[selectedParcel.group] = `${
        groupParcels[selectedParcel.group]?.length + 1
      }00px`;

      if (idx === 0 || idx === 1) {
        newDivElements.splice(
          idx === 0 ? parcelIndex + 1 : idx === 1 && parcelIndex,
          0,
          obj
        );
        newHeaderWidth[selectedParcel.group] = `${
          groupParcels[selectedParcel.group]?.length + 1
        }00px`;
      } else if (idx === 2) {
        newDivElements.splice(parcelIndex, 1, obj);
        newHeaderWidth[selectedParcel.group] = `${
          groupParcels[selectedParcel.group]?.length
        }00px`;
      } else if (idx === 3) {
        newDivElements.splice(parcelIndex, 1);

        newHeaderWidth[selectedParcel.group] = `${
          groupParcels[selectedParcel.group]?.length - 1
        }00px`;
      }
      setHeaderWidth(newHeaderWidth);

      newDivElements.forEach((parcel, index) => {
        parcel.sequence = index + 1;
      });

      setDivElements(newDivElements);
    }
    setData({ ...data, input: "", location: "", currentParcel: "" });
  };
  const handleCurrentParcel = (name) => {
    setData({ ...data, currentParcel: name });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="header__container">
        <Header headerWidth={headerWidth.Mumbai} color="#F0155E">
          Mumbai
        </Header>
        <Header headerWidth={headerWidth.Delhi} color="#F1C232">
          Delhi
        </Header>
        <Header headerWidth={headerWidth.Kolkata} color="#3C79D8">
          Kolkata
        </Header>
      </div>
      <div className="parcel">
        {groupParcels["Mumbai"].map((parcel) => (
          <Parcels
            data={data}
            parcel={parcel}
            color="#F0155E"
            handleCurrentParcel={handleCurrentParcel}
          />
        ))}

        {groupParcels["Delhi"].map((parcel) => (
          <Parcels
            data={data}
            parcel={parcel}
            color="#F1C232"
            handleCurrentParcel={handleCurrentParcel}
          />
        ))}

        {groupParcels["Kolkata"].map((parcel) => (
          <Parcels
            data={data}
            parcel={parcel}
            color="#3C79D8"
            handleCurrentParcel={handleCurrentParcel}
          />
        ))}
      </div>

      <InputBox data={data} handleChange={handleChange} />

      <CTA showInputHandler={showInputHandler} data={data} />
    </>
  );
};

export default Home;
