import React from "react";

import "./custom-button.css";

const CustomButton = ({ childern, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {childern}
  </button>
);
export default CustomButton;
