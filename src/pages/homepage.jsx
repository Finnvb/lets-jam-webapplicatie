// import { useState } from "react";
import reactLogo from "../assets/react.svg";
import background from "../assets/background.png";
import search from "../assets/search.svg";
import random from "../assets/random.svg";
import az from "../assets/az.svg";
import category from "../assets/category.svg";
import randomizeImg from "../assets/randomize.png";
import testafbeelding from "../assets/afbeelding.png";

import "./Homepage.css";

import Button from "../components/test";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import SearchOption from "../components/SearchOption";

import { useState, useEffect } from "react";

export default function Homepage() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  // function Randomize(){
  //   useEffect(() => {
  //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(
  //             `This is an HTTP error: The status is ${response.status}`
  //           );
  //         }
  //         return response.json();
  //       })
  //       .then((actualData) => {setData(actualData);
  //       console.log(actualData)})
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }, []);
  // }

  const randomize = ()=> {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {setData(actualData);
    console.log(actualData)})
    .catch((err) => {
      console.log(err.message);
    });
  }




   useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {setData(actualData);
      console.log(actualData)})
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  return (
    <main>




      <Navbar />
      <img src={background} className="background-img" alt="background" />
      <h1>Find out how to make your favorite cocktails!</h1>

  
      <div className="searchOptions">
        <SearchOption link="#name" source={search} text="Search"></SearchOption>
        <SearchOption
          link="#random"
          source={random}
          text="Random"
        ></SearchOption>
        <SearchOption
          link="#browse"
          source={az}
          text="Browse AZ"
        ></SearchOption>
        <SearchOption source={category} text="Category"></SearchOption>
      </div>

      <Section id="name" title="Search by name">
        <div className="searchbar">
          <input type="text" />
          <button className="button">Search</button>
        </div>
      </Section>

      <Section id="random" title="Random cocktail">
        <div className="container">
          <button onClick={randomize} className="randomize">
            <img  src={randomizeImg} alt="Randomize" />
            <p>Randomize</p>
          </button>


<div className="center">
          {/* <img className="cocktail-image" src={testafbeelding} alt="cocktail" /> */}
          {/* <p>Cocktail</p> */}
          {data &&
          data.drinks.map(({ idDrink, strDrink, strDrinkThumb}) => (
            <a href={idDrink}>
            <div className="center" key={idDrink}>
              {/* <h3>{strDrink}</h3> */}
              <img className="cocktail-image" key={idDrink} src={strDrinkThumb} alt={strDrink} />
              <p>{strDrink}</p>
            </div>
            </a>
          ))}
          </div>



        </div>
      </Section>

      <Section id="browse" title="Browse by first letter"></Section>

      <Footer />

    

    </main>
  );
}
