import React from "react";
import { cta } from "../../data";

import "./CTA.css";

const CTA = ({ showInputHandler, data }) => {
  return (
    <>
      <div className="cta">
        {cta.length &&
          cta?.map((c, i) => (
            <button
              key={i}
              onClick={() => showInputHandler(i, data.currentParcel)}
            >
              {c}
            </button>
          ))}
      </div>
    </>
  );
};

export default CTA;
