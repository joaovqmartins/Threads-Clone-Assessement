import React from "react";
import backarrow from "../assets/back-arrow.png";

const BackButton = ({ onBack }) => {
  return (
    <button onClick={onBack}>
      <img src={backarrow} alt="Voltar" className="Img-icon" />
    </button>
  );
};

export default BackButton;
