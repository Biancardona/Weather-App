import React from "react";
import SearchButton from "../Components/SearchButton/SearchButton";
import NavBar from "../Components/Navbar/Navbar";
import { Jumbotron } from "react-bootstrap";
import "../Style/custom.css";

const Home = () => {
  return (
    <div>
      <div className="columns is-multiline">
        <div className="column"></div>
        <header>
          <NavBar> </NavBar>
        </header>

        <div className="container ">
          <Jumbotron>
            <div className="bg">
              <h2> Enter a city to know the weather </h2>
              <div>
                <SearchButton> </SearchButton>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
};

export default Home;
