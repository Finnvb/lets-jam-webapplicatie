import styles from "./Footer.module.css";
import logo from "../assets/logo.png";
import copyleft from "../assets/copyleft.png";


function Footer() {
  return (
    <footer>
        <a href="/">
      <img className={styles.logo} src={logo} alt="Cocktail-logo" />
      </a>

<div className={styles.name}>
    <img src={copyleft} alt="copyleft" />
     <p>Finn van Bekkum</p>
     </div>
    </footer>
  );
}

export default Footer;
