import styles from "./crimeflix.module.css"

const Crimeflix = (props) => {
  return (
    <>
        <section className={styles.crimeflixSection}>
        <iframe src={props.video} ></iframe>  
    </section>
    </>
  )
}

export default Crimeflix