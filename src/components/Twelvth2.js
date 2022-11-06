import React from "react";

const Twelvth2 = (props) => {
  return (
    <div className="single-card">
      <img src={props.pict} alt="" />
      <div className="card-text">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Twelvth2;
