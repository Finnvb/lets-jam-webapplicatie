import { useState } from "react";
import reactLogo from "../assets/react.svg";
import background from "../assets/background.png";
import search from "../assets/search.svg";
import random from "../assets/random.svg";
import az from "../assets/az.svg";
import category from "../assets/category.svg";
import "./Homepage.css";

import Button from "../components/test";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import SearchOption from "../components/SearchOption";

function Homepage() {
  return (
    <main>
      <Navbar />
      <img src={background} className="background-img" alt="background" />
      <h1>Find out how to make your favorite cocktails!</h1>

      <div className="searchOptions">
        <SearchOption id="search" source={search} text="Search"></SearchOption>
        <SearchOption source={random} text="Random"></SearchOption>
        <SearchOption source={az} text="Browse AZ"></SearchOption>
        <SearchOption  source={category} text="Category"></SearchOption>
      </div>

      <Section title="Search by name"></Section>

      <Section title="Random cocktail"></Section>

      <Section id="browse" title="Browse by first letter"></Section>

      <Footer />
    </main>
  );
}

export default Homepage;
