import React from "react";

import "./Header.css";

const Header = ({ children, headerWidth, color }) => {
  const headerStyle = {
    fontSize: "1.6rem",
    padding: ".6rem",
    width: headerWidth,
    backgroundColor: color,
    display: "inline-block",
  };

  return <div style={headerStyle}>{children}</div>;
};

export default Header;
