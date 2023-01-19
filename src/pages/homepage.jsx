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
      setError(err.message);
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


let userValue ='';
  const getInputValue = (event)=>{
  
     userValue = event.target.value;

    console.log(userValue);

};



  
  
  // const clickButton = ()=> {


  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userValue}`)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(
  //         `This is an HTTP error: The status is ${response.status}`
  //       );
  //     }
  //     return response.json();
  //   })
  //   .then((actualData) => {setData(actualData);
  //   console.log(actualData)})
  //   .catch((err) => {
  //     setError(err.message);
  //     console.log(err.message);
  //   });
  // }


  return (
    <main>




      <Navbar />
      <img src={background} className="background-img" alt="background" />
      <h1 className="header">Find out how to make your favorite cocktails!</h1>

  
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
        <SearchOption link="#category" source={category} text="Category"></SearchOption>
      </div>

      <Section id="name" title="Search by name">
        <div className="searchbar">
          <input type="text" placeholder="Search"  />
          <button className="button" >Search</button>
        </div>

        
      </Section>

      <Section id="random" title="Random drink">
        <div className="container">
          <button onClick={randomize} className="randomize">
            <img  src={randomizeImg} alt="Randomize" />
            <p>Randomize</p>
          </button>


<div className="center">
         
          {data &&
          data.drinks.map(({ idDrink, strDrink, strDrinkThumb}) => (
            <a href={idDrink}>
            <div className="center" key={idDrink}>
              {/* <h3>{strDrink}</h3> */}
              <img className="cocktail-image-random" key={idDrink} src={strDrinkThumb} alt={strDrink} />
              <p>{strDrink}</p>
            </div>
            </a>
          ))}
          </div>


        

        </div>
      </Section>

      <Section id="browse" title="Browse by first letter">

<ul className="alphabet">
  <li><a href="overview/a"> A</a></li>
  <li><a href="overview/b"> B</a></li>
  <li><a href="overview/c"> C</a></li>
  <li><a href="overview/d"> D</a></li>
  <li><a href="overview/e"> E</a></li>
  <li><a href="overview/f"> F</a></li>
  <li><a href="overview/g"> G</a></li>
  <li><a href="overview/h"> H</a></li>
  <li><a href="overview/i"> I</a></li>
  <li><a href="overview/j"> J</a></li>
  <li><a href="overview/k"> K</a></li>
  <li><a href="overview/l"> L</a></li>
  <li><a href="overview/m"> M</a></li>
  <li><a href="overview/n"> N</a></li>
  <li><a href="overview/o"> O</a></li>
  <li><a href="overview/p"> P</a></li>
  <li><a href="overview/q"> Q</a></li>
  <li><a href="overview/r"> R</a></li>
  <li><a href="overview/s"> S</a></li>
  <li><a href="overview/t"> T</a></li>
  <li><a href="overview/u"> U</a></li>
  <li><a href="overview/v"> V</a></li>
  <li><a href="overview/w"> W</a></li>
  <li><a href="overview/x"> X</a></li>
  <li><a href="overview/y"> Y</a></li>
  <li><a href="overview/z"> Z</a></li>
</ul>

      </Section>


      <Section  id="category" title="Filter by category">

<div className="category-container">
        <a className="category" href="overview/category/Alcoholic">Alcoholic</a>
        <a className="category" href="overview/category/Non_Alcoholic">non-alcoholic</a>

         <a className="category"  href="overview/category/Cocktail">Cocktail</a>
         <a className="category" href="overview/category/Beer">Beer</a>
         <a className="category" href="overview/category/Shot">Shot</a>
         <a className="category" href="overview/category/Cocoa">Cocoa</a>

        <a className="category" href="overview/category/Soft Drink">Soft drink</a>
        <a className="category" href="overview/category/Shake">Shake</a>

        </div>

</Section>

      <Footer />

    

    </main>
  );
}
