import React, { useState } from "react";
import "./App.css";

const App = () => {
  const initialMatrix = Array(9).fill({ color: "white", clicked: false });

  const [matrix, setMatrix] = useState(initialMatrix);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index].clicked && index !== 8) return;
    if (index === 8) {
      changeAllToOrange();
      return;
    }
    const newMatrix = [...matrix];
    newMatrix[index] = { color: "green", clicked: true };

    setMatrix(newMatrix);
    setClickOrder([...clickOrder, index]);
  };

  const changeAllToOrange = () => {
    clickOrder.forEach((clickedIndex, i) => {
      setTimeout(() => {
        setMatrix((prevMatrix) => {
          const newMatrix = [...prevMatrix];
          newMatrix[clickedIndex] = {
            ...newMatrix[clickedIndex],
            color: "orange",
          };
          return newMatrix;
        });
      },i*100);
    });
  };

  return (
    <div className="container">
      <div className="matrix">
        {matrix.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: box.color }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
