const TheComponent = ({ level }: { level: number | undefined }) => {
  // create a variable to store the temperament levels
  const Levels = [1, 2, 3, 4, 5];
  // create a variable to store the temperament colors
  const Colors = ["#544439", "#E0E0E0"];

  return (
    <div className="flex  items-center">
      {Levels.map((kindex, index) => {
        if (level === undefined) {
          return null;
        }
        return (
          <div
            key={index}
            className="mr-2 h-3 w-12 rounded-lg md:mr-4 md:w-16"
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
