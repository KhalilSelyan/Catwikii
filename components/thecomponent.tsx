import React from "react";
import "./TheComponent.styles.scss";
const TheComponent = ({ level }) => {
  // create a variable to store the temperament levels
  const Levels = [1, 2, 3, 4, 5];
  // create a variable to store the temperament colors
  const Colors = ["#544439", "#E0E0E0"];

  return (
    <div className="TheComponent">
      {Levels.map((kindex, index) => {
        return (
          <div
            key={index}
            className="level"
            // change the color of the div based on the level if the level is greater than the index of the array  if the level is less than the index of the array then the color will be white
            style={{
              backgroundColor: index < level ? Colors[0] : Colors[1],
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default TheComponent;
