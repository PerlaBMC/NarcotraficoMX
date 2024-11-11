import styles from "./noticias.module.css"

const Noiticias = () => {
  return (
   <>
   <section className={styles.noticiasContainer}>
    <a href="/Noticia">
        <div className={styles.cardNoticia}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730258050/NarcotraficoMX/Logo_Gurpo_de_Narcotra%CC%81fico_MX_dzsjnq.png" alt="" />
        <h3>Titulo</h3>
        <p>Descripción</p>
        </div>
    </a>
    <a href="">
        <div className={styles.cardNoticia}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730258050/NarcotraficoMX/Logo_Gurpo_de_Narcotra%CC%81fico_MX_dzsjnq.png" alt="" />
        <h3>Titulo</h3>
        <p>Descripción</p>
        </div>
    </a>
    <a href="">
        <div className={styles.cardNoticia}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730258050/NarcotraficoMX/Logo_Gurpo_de_Narcotra%CC%81fico_MX_dzsjnq.png" alt="" />
        <h3>Titulo</h3>
        <p>Descripción</p>
        </div>
    </a>
    <a href="">
        <div className={styles.cardNoticia}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730258050/NarcotraficoMX/Logo_Gurpo_de_Narcotra%CC%81fico_MX_dzsjnq.png" alt="" />
        <h3>Titulo</h3>
        <p>Descripción</p>
        </div>
    </a>
   </section>
   </>
  )
}

export default Noiticias