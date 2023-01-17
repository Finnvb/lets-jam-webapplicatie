import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";



function Navbar() {
  return (
    <nav>
          <a href="/">
      <img className={styles.logo} src={logo} alt="Cocktail-logo" />
      </a>
 

      <button>Log in</button>
    </nav>
  );
}

export default Navbar;
