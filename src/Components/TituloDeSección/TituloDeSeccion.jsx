import styles from "./tituloDeSeccion.module.css"

const TituloDeSeccion = (props) => {
  return (
   <>
   <div className={styles.tituloContainer}>
    <h3>{props.titulo}</h3>
   </div>
   </>
  )
}

export default TituloDeSeccion