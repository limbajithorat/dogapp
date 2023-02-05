import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import AllBreeds from "./components/AllBreeds";
import DogImages from "./components/DogImages";
import Randomdog from "./components/RadomDog";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="maincontainer">
        <nav className="navbar">
          <ul>
            <li>
              <Link id="link" to="/alldogs">
                DogImages
              </Link>
            </li>
            <li>
              <Link id="link" to="/threerandomdog">
                Randomdog
              </Link>
            </li>
            <li>
              <Link id="link" to="/breeds">
                AllBreeds
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />

        <Routes>
          <Route>
            <Route path="/alldogs" element={<DogImages />} />
            <Route path="/threerandomdog" element={<Randomdog />} />
            <Route path="/breeds" element={<AllBreeds />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
