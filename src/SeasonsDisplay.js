import React from "react";
import './SeasonsDisplay.css'

const seasonconfig = {
  Summer: {
    text: "Lets go to the beach!!!",
    iconName: "sun",
  },

  Winter: {
    text: "The weather soo cold!!!",
    iconName: "snowflake",
  },
};

const getseason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat < 0 ? "Summer" : "Winter";
  }
};

const SeasonsDisplay = (props) => {
  const season = getseason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonconfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={ `icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={ `icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonsDisplay;
