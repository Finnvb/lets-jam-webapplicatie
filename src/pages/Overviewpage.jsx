import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emptyStateImg from "../assets/emptyState.svg";
import "./Overviewpage.css";
import AnimatedPage from "../components/AnimatedPage";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Uidpage() {
  const { uid } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${uid}`)
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

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${uid}`)
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

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${uid}`)
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
        <h1 className="overview-title">
          Browse all drinks <br /> {uid}
        </h1>
        <Navbar />
        <div className="cocktail-container">
          {/* {data &&
            data.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
              <a href={`id/${idDrink}`}>
                <div className="center" key={idDrink}>
                  <img
                    className="cocktail-image-overview"
                    key={idDrink}
                    src={strDrinkThumb}
                    alt={strDrink}
                  />
                  <p>{strDrink}</p>
                </div>
              </a>
            ))} */}
        </div>

        <div className="cocktail-container">
              {data && data.drinks === null ? (
                <div className="center">
                <h1>No cocktails found</h1>
                
                <img src={emptyStateImg} alt="Empty State" />
                </div>
              ) :  data &&
                data.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
                  <a href={`id/${idDrink}`}>
                    <div className="center" key={idDrink}>
                      <img
                        className="cocktail-image-overview"
                        key={idDrink}
                        src={strDrinkThumb}
                        alt={strDrink}
                      />
                      <p>{strDrink}</p>
                    </div>
                  </a>
                ))}  
                 </div>
        <Footer />
      </main>
    </AnimatedPage>
  );
}
