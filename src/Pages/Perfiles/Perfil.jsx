import styles from "./perfil.module.css";
import CarouselFoto from "../../Components/CarruselFoto/Carrusel/Carrusel";
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { useParams } from "react-router-dom";

const Perfil = () => {
	const { getMiembroOrg, miembro } = useContext(OrgContext);
	const { id } = useParams();
	//console.log(id);

	useEffect(() => {
		getMiembroOrg(id);
		//console.log(getOrganizacion);
	}, [getMiembroOrg, id]);

	return (
		<>
			{miembro.id && (
				<div className={styles.perfilContainer}>
					<section className={styles.datosGenerales}>

						<div className={styles.carruselFotos}>
							<CarouselFoto />
						</div>
						<div className={styles.fichaDeDatosContainer}>
							<div className={styles.fichaDeDatos}>
								<ul>
									<em>Nombre:</em>
									<p>{miembro.Nombre}</p>
								</ul>
								<ul>
									<em>Alias:</em>
									<p>"{miembro.Apodo}"</p>
								</ul>
								<ul>
									<em>Fecha de nacimiento:</em>
									<p>{miembro.FechaDeNacimiento}</p>
								</ul>
								<ul>
									<em>Lugar de nacimiento:</em>
									<p>{miembro.LugarDeNacimiento}</p>
								</ul>
								<ul>
									<em>Organización criminal:</em>
									<p>{miembro.OrganizacionDePertenencia}</p>
								</ul>
								<ul>
									<em>Función en la organización:</em>
									<p>{miembro.FuncionDentroDeLaOrganizacion}</p>
								</ul>
								<ul>
									<em>Situación penal:</em>
									<p>{miembro.SituacionPenal}</p>
								</ul>
							</div>
						</div>
					</section>
					<section className={styles.resumenDeVidaContainer}>
						<div className={styles.resumenDeVida}>
							<h1>{miembro.HitoriaDeVida.Relato.Titulo}</h1>
							<p>{miembro.HitoriaDeVida.Relato.parrafoInicial}</p>
							<img
								className={styles.imagenUno}
								src={miembro.HitoriaDeVida.Relato.FotosDeRelato.fotoUno}
								alt="Imagen Derecha"
							/>
							<h4>{miembro.HitoriaDeVida.Relato.Descripción.subtituloUno} </h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoUno} </p>
							<h4>{miembro.HitoriaDeVida.Relato.Descripción.subtituloDos} </h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoDos} </p>
							<h4>{miembro.HitoriaDeVida.Relato.Descripción.subtituloTres} </h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoTres} </p>
							<img
								className={styles.imagenDos}
								src={miembro.HitoriaDeVida.Relato.FotosDeRelato.fotoDos}
								alt="Imagen Izquierda"
							/>
							<h4>
								{miembro.HitoriaDeVida.Relato.Descripción.subtituloCuatro}{" "}
							</h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoCuatro} </p>
							<h4>
								{miembro.HitoriaDeVida.Relato.Descripción.subtituloCinco}{" "}
							</h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoCinco} </p>
							<h4>{miembro.HitoriaDeVida.Relato.Descripción.subtituloSeis} </h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoSeis} </p>
							<h4>
								{miembro.HitoriaDeVida.Relato.Descripción.subtituloSiete}{" "}
							</h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoSiete} </p>
							<h4>{miembro.HitoriaDeVida.Relato.Descripción.subtituloOcho} </h4>
							<p> {miembro.HitoriaDeVida.Relato.Descripción.parrafoOcho} </p>
							<div className={styles.bibliografia}>
							<h4 className={styles.bibliografia}>
								{miembro.HitoriaDeVida.Relato.Descripción.subtituloNueve}{" "}
							</h4>
							<p className={styles.bibliografiaParrafo}> {miembro.HitoriaDeVida.Relato.Descripción.parrafoNueve} </p>
							</div>
						</div>
					</section>
				</div>
			)}
		</>
	);
};

export default Perfil;
