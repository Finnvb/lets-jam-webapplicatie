import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Uid.css";
import AnimatedPage from "../components/AnimatedPage";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
export default function Uidpage() {
  const { uid } = useParams();

  console.log(uid);

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
      .then((actualData) => {
        setData(actualData);
        console.log(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <AnimatedPage>
    <main>
      <div className="nav">
        <Navbar />
      </div>
      {/* <p className="test">hgtreiisntgdijn</p> */}
      {/* <div>idDrink is: {uid}</div> */}

      {data &&
        data.drinks.map(
          ({
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strCategory,
            strGlass,
            strInstructions,
            strIngredient1,
            strMeasure1,
            strIngredient2,
            strMeasure2,
            strIngredient3,
            strMeasure3,
            strIngredient4,
            strMeasure4,
            strIngredient5,
            strMeasure5,
            strIngredient6,
            strMeasure6,
            strIngredient7,
            strMeasure7,
          }) => (
            <section className="drink-container" key={idDrink}>
              <h1>{strDrink}</h1>
              <img
                className="cocktail-image"
                key={idDrink}
                src={strDrinkThumb}
                alt={strDrink}
              />
              <div className="info">
                <div>
                  <h2>Category</h2>
                  <p>
                    {strAlcoholic}<br/> {strCategory}
                  </p>
                </div>
                <div>
                  {" "}
                  <h2>Ingredients</h2>
                  <ul>
                    <li>
                      {strIngredient1} - {strMeasure1}
                    </li>
                    <li>
                      {strIngredient2} - {strMeasure2}
                    </li>
                    <li>
                      {strIngredient3} - {strMeasure3}
                    </li>
                    <li>
                      {strIngredient4} - {strMeasure4}
                    </li>
                    <li>
                      {strIngredient5} - {strMeasure5}
                    </li>
                    <li>
                      {strIngredient6} - {strMeasure6}
                    </li>
                    <li>
                      {strIngredient7} - {strMeasure7}
                    </li>
                  </ul>
                </div>
                <div>
                  <h2>Glass</h2>
                  <p>{strGlass}</p>
                </div>
              </div>
              <div >
                <h2>Instructions</h2>
                <p>{strInstructions}</p>
              </div>
            </section>
          )
        )}
      <Footer />
    </main>
    </AnimatedPage>
  );
}
