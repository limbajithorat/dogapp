import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Randomdog.css";
const Randomdog = () => {
  const [dogs, setDogs] = useState([]);
  const refreshPage = () => {
    window.location.reload(false);
  };
  useEffect(() => {
    const apiURL = "https://dog.ceo/api/breeds/image/random/3";
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data.message);
        setDogs(res.data.message);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container">
      <div className="subcontainer">
        {dogs.map((dog, index) => {
          return (
            <div className="image" key={index}>
              <img src={dog} alt=""></img>
            </div>
          );
        })}
      </div>
      <div className="button">
        <button onClick={refreshPage}>GenerateRandomDog</button>
      </div>
    </div>
  );
};

export default Randomdog;
