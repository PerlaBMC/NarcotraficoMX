import styles from "./noticiaPage.module.css";
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { useParams } from "react-router-dom";
import Crimeflix from "../../Components/Crimeflix/Crimeflix";

const NoticiaPage = () => {
	const { getNoticia, noticia } = useContext(OrgContext);
	const { id } = useParams();

	useEffect(() => {
		getNoticia(id);
	}, [getNoticia, id]);

	return (
		<>
			{noticia.id && (
				<div className={styles.noticiaPageContainer}>
					<div className={styles.backGroundNoticia}>
						<h3 className={styles.tituloDeNoticia}>
							{noticia.Noticia.subtituloUno}
						</h3>
						<p>{noticia.Noticia.parrafoUno}</p>
						<img
							className={styles.imagenUno}
							src={noticia.ImagenUno}
							alt="Imagen Derecha"
						/>
						<h5>{noticia.Noticia.subtituloDos}</h5>
						<p>{noticia.Noticia.parrafoDos}</p>
						<img
							className={styles.imagenDos}
							src={noticia.ImagenDos}
							alt="Imagen Izquierda"
						/>
						<h5>{noticia.Noticia.subtituloTres}</h5>
						<p>{noticia.Noticia.parrafoTres}</p>
						<h5>{noticia.Noticia.subtituloCuatro} </h5>
						<p>{noticia.Noticia.parrafoCuatro}</p>
						<h5>{noticia.Noticia.subtituloCinco} </h5>
						<p>{noticia.Noticia.parrafoCinco}</p>
						<h5>{noticia.Noticia.subtituloSeis} </h5>
						<p>{noticia.Noticia.parrafoSeis}</p>
						<h5>{noticia.Noticia.subtituloSiete} </h5>
						<p>{noticia.Noticia.parrafoSiete}</p>
						{/*{typeof noticia.ImagenTres === "string" &&
						noticia.ImagenTres.trim() !== "" ? (
							<Crimeflix video={noticia.ImagenTres} />
						) : null}*/}
					</div>
				</div>
			)}
		</>
	);
};

export default NoticiaPage;
