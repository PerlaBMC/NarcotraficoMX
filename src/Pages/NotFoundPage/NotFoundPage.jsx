import styles from "./notFound.module.css"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className={styles.notFounPage}>
      <div className={styles.error404}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1736221042/NarcotraficoMX/Perfilescarrusel_go6ugu.png" alt="error" />
      <p>404</p>
      </div>
      <div className={styles.NotFound}>
        <p>Página <em>no</em> encotrada</p>
      </div>
      <div className={styles.botonRegresar}>
        <Link to={"/"}>Regresar</Link>
      </div>
    </div>
  )
}

export default NotFoundPage