import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 24 20.09"
}) => (
  <svg
    width={width}
    height={height}
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M23.9,9.79,21.16,6.67A2,2,0,0,0,19.68,6H15V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V18H2.09a2.09,2.09,0,1,0,4.17,0H17.74a2.09,2.09,0,1,0,4.17,0H24V15h0V10.05A.4.4,0,0,0,23.9,9.79ZM1,2A1,1,0,0,1,2,1H13a1,1,0,0,1,1,1V14H1ZM4.17,19.09A1.09,1.09,0,1,1,5.26,18,1.09,1.09,0,0,1,4.17,19.09Zm15.65,0A1.09,1.09,0,1,1,20.91,18,1.09,1.09,0,0,1,19.83,19.09ZM23,17H21.65A2.07,2.07,0,0,0,18,17H6a2.07,2.07,0,0,0-3.64,0H1V15H23Zm-8-3V7h4.44a1.5,1.5,0,0,1,1.13.51L23,10.29V14Z"
    />
  </svg>
);

export default SVG;
