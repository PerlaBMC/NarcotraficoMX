import styles from "./cardCedula.module.css";
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { useParams } from "react-router-dom";
import { GiClick } from "react-icons/gi";

const CardCedula = () => {
	const { getOrganizacion, org } = useContext(OrgContext);
	const { id } = useParams();

	useEffect(() => {
		getOrganizacion(id);
	}, [getOrganizacion, id]); 

	const renderCard = (celula) => {
		return (
			celula && celula.imagenDeAgrupación && celula.nombreDeAgrupacion && celula.descipcionDeAgrupacion && (
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.frontContent}>
							<img src={celula.imagenDeAgrupación} alt="Imagen célula criminal" />
							<p>{celula.nombreDeAgrupacion} <GiClick className={styles.clickCard}/></p>
						</div>
						<div className={styles.content}>
							<p>{celula.descipcionDeAgrupacion}</p>
						</div>
					</div>
				</div>
			)
		);
	};

	return (
		<>
			{org.id && (
				<div className={styles.CardsContainerCelulas}>
					{renderCard(org.celulasCriminales.celulaUno)}
					{renderCard(org.celulasCriminales.celulaDos)}
					{renderCard(org.celulasCriminales.celulaTres)}
					{renderCard(org.celulasCriminales.celulaCuatro)}
					{renderCard(org.celulasCriminales.celulaCinco)}
					{renderCard(org.celulasCriminales.celulaSeis)}
					{renderCard(org.celulasCriminales.celulaSiete)}
					{renderCard(org.celulasCriminales.celulaOcho)}
				</div>
			)}
		</>
	);
}

export default CardCedula;
