import styles from "./footer.module.css"
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok, FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <div className={styles.footerContainer}>
    <div className={styles.privacidad}> 
    <a href="/Politicas"><p>Políticas de Privacidad</p></a>
    </div>
    <div className={styles.DirectorioPortales}> 
    <a href="/">Portal de Noticia</a>
    <a href="/"><p>Crimeflix</p></a>
    </div>
    <div className={styles.redes}>
    <a href="/" ><FaInstagram className={styles.instagram}/></a>
    <a href="" ><FaTiktok className={styles.tiktok}/></a>
    <a href=""><FaYoutube className={styles.youtube}/></a>
    </div>
    </div>
    </>
  )
}

export default Footer