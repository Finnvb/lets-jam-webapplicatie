import styles from "./SearchOption.module.css";
import logo from "../assets/logo.png"

function SearchOption(props) {
  return (
 <a href="/" >
    <div className={styles.box}>
        <img src={props.source} alt="img" />
        <h2>{props.text}</h2>
    </div>
    </a>
  );
}

export default SearchOption;
