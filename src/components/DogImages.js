import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./DogsImage.css";
const DogImages = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const apiURL = "https://dog.ceo/api/breed/hound/images";
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data.message);
        setDogs(res.data.message);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="dogcontainer">
      {dogs.map((dog, index) => {
        return (
          <div className="dogsImage" key={index}>
            <img src={dog} alt=""></img>
          </div>
        );
      })}
    </div>
  );
};

export default DogImages;
