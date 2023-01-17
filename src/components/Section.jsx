import styles from "./Section.module.css";


function Section(props) {
  return (

    <section id={props.id}>
        <h2>{props.title}</h2>
        {props.children}
    </section>
  );
}

export default Section;
