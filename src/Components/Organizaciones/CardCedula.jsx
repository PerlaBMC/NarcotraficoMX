import styles from "./cardCedula.module.css";
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { useParams } from "react-router-dom";
import { FaBookDead } from "react-icons/fa";
import { PiMouseScrollFill } from "react-icons/pi";
import { GiHalfDead } from "react-icons/gi";

const CardCedula = () => {
	const { getOrganizacion, org } = useContext(OrgContext);
	const { id } = useParams();

	useEffect(() => {
		getOrganizacion(id);
	}, [getOrganizacion, id]);

	const renderCard = (celula) => {
		return (
			celula &&
			celula.imagenDeAgrupación &&
			celula.nombreDeAgrupacion &&
			celula.descipcionDeAgrupacion && (
				<div className={styles.cardContainer}>
					<div className={styles.model}>
						<article className={styles.modalContainer}>
							<header className={styles.modalContainerHeader}>
								<span className={styles.modalContainerTitle}>
									<GiHalfDead />
									{celula.nombreDeAgrupacion}
								</span>
								<PiMouseScrollFill className={styles.iconScroll}/>
							</header>
							<section className={styles.modalContainerBody}>
								{celula.descipcionDeAgrupacion}
							</section>
							<footer className={styles.modalContainerFooter}></footer>
						</article>
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
};

export default CardCedula;
