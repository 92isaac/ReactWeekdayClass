import React from "react";
import './styles/Twelvth.css'
import Thirtheen2 from "./Thirtheen2";
import cardlist from "./thirtheen3";


// const showDisplay=(element,)=>{
//     return <Thirtheen2 
//     key={element.thirtimg}
//     thirtimg={element.thirtimg}
//     text={element.text}
//     />
// }

const Thirtheen1 = () => {
  return (
    <div className="card-wrapper">
      <div className="cards">
       {cardlist.map((element)=>(
        <Thirtheen2 
        key={element.thirtimg}
        thirtimg={element.thirtimg}
        text={element.text}
        />
       ))}

       {/* {cardlist.map(showDisplay)} */}
      </div>
    </div>
  );
};

export default Thirtheen1;
