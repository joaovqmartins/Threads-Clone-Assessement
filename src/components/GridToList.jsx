import React from "react";
import layoutsIcon from "../assets/layouts.png";

const GridToList = ({ onChangeView, isGridView }) => {
  return (
    <button onClick={onChangeView}>
      <img
        src={layoutsIcon}
        alt={isGridView ? "Alternar para lista" : "Alternar para grade"}
        className="Img-icon"
      />
    </button>
  );
};

export default GridToList;
