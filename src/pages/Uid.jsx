import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import './Uid.css'

import { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
export default function Uidpage() {


    const {uid} = useParams();

    console.log(uid)

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${uid}`)
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


return(
    <main>
<Navbar/>

{/* <p className="test">hgtreiisntgdijn</p> */}
<div>idDrink is: {uid}</div>

{data &&
          data.drinks.map(({ idDrink, strDrink, strDrinkThumb, strInstructions}) => (
            
            <div className="center" key={idDrink}>
              <h3>{strDrink}</h3>
              <img className="cocktail-image" key={idDrink} src={strDrinkThumb} alt={strDrink} />
              <p>{strDrink}</p>
              <p>{strInstructions}</p>
            </div>
           
          ))}
<Footer/>
</main>
)
}

