import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Allbreeds.css";
const AllBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const apiURL = "https://dog.ceo/api/breeds/list";
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data.message);
        setBreeds(res.data.message);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="allbreeds">
      {breeds.map((dog, index) => {
        return (
          <div className="breed" key={index}>
            <p>{dog}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllBreeds;
