import React from "react";

const Thirtheen2 = ({ thirtimg, text }) => {
  return (
    <div className="single-card">
      <img src={thirtimg} alt="" />
      <div className="card-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Thirtheen2;
