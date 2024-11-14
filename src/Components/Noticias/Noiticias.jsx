import styles from "./noticias.module.css";
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { Link } from "react-router-dom";

const Noiticias = () => {
	const { getNoticias, noticias } = useContext(OrgContext);
	useEffect(() => {
		getNoticias();
	}, [getNoticias]);


	return (
		<>
			<section className={styles.noticiasContainer}>
				{noticias.map((noticia) => (
					<div key={noticia.id}>
						<Link to={`/Noticia/${noticia.id}`}>
							<div className={styles.cardNoticia}>
								<img
									src={noticia.ImagenDePortada}
									alt="Imagen de nota"
								/>
								<h3>{noticia.Titulo}</h3>
								<p>{noticia.pieDeNota}</p>
							</div>
						</Link>
					</div>
				))}
			</section>

			{/*<section className={styles.noticiasContainer}>
    <a href="/Noticia">
        <div className={styles.cardNoticia}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730258050/NarcotraficoMX/Logo_Gurpo_de_Narcotra%CC%81fico_MX_dzsjnq.png" alt="" />
        <h3>Titulo</h3>
        <p>Descripción</p>
        </div>
    </a>
   </section>*/}
		</>
	);
};

export default Noiticias;
