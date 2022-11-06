import React, { useEffect, useState } from "react";
import axios from "axios";

const Sixtheen = () => {
  const [result, setResult] = useState([]);
  const [loading, setlLoading] = useState(true);
  

  useEffect(() => {
    let url = "https://randomuser.me/api/?results=20";
    axios
      .get(url)
      .then((favour) => {
        console.log(favour.data);
        setResult(favour.data.results);
        setlLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      {loading ? 'Loading...' : result.map((element)=>(<div className="user-wrapper card" key={element.email}>
        <div className="user-image">
          <img src={element.picture.large} alt="user-img"  style={{width:"100px", height:"100px"}}/>
        </div>
        <h1>{element.name.title} {element.name.first} {element.name.last}</h1>
        <h4>{element.location.city}</h4>
        <h4>{element.location.state}</h4>
        <h4>{element.location.country}</h4>
        <h5>Email: {element.email}</h5>
        <h5>Phone:{element.phone}</h5>
      </div>))}
    </div>
  );
};

export default Sixtheen;
