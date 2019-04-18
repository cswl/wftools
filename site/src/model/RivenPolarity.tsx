import React from "react";

function RivenPolarity(props) {
  const { height, width, color, polarity } = props;
  const colorId = color === "black" ? "B" : "P";

  const polarities = {
    madurai: `/assets/polarities/Madurai_${colorId}.svg`,
    naramon: `/assets/polarities/Naramon_${colorId}.svg`,
    vazarin: `/assets/polarities/Vazarin_${colorId}.svg`
  };
  console.log(props);
  return <img src={polarities[polarity]} height={height} width={width} />;
}
export default RivenPolarity;
