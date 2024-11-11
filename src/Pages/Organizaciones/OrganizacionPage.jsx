import { useContext, useEffect } from "react";
import ProductContext from "../../Context/productContext";
import { useParams } from "react-router-dom";
import styles from "./organizacion.module.css";
import TituloDeSeccion from "../../Components/TituloDeSección/TituloDeSeccion";
import CardCedula from "../../Components/CardCedula/CardCedula";

const OrganizacionPage = () => {
	const { getProduct, product } = useContext(ProductContext);
	const { id } = useParams();
	//console.log(id);

	useEffect(() => {
		getProduct(id);
		//console.log(getProduct);
	}, [getProduct, id]);

	return (
		<>
			<div className={styles.OrganizacionPageContainer}>
				{product.id && (
					<div className={styles.OrganizacionPageContainer}>
						<section className={styles.bannerORg}>
							<div className={styles.logoORg}> 
								<img src={product.imagen} alt="" />
							</div>
							<div className={styles.mapaOrg}>
								<img src={product.mapaExpansionTerritorial} alt="" />
							</div>
						</section>
						<section className={styles.infOrg}>
							<p>{product.Descripcion}</p>
						</section>
						<section className={styles.organigramaContainer}>
							<h3>Organigrama</h3>
							
						</section>
						<section className={styles.containerCelulas}>
							<TituloDeSeccion titulo="Zona de influencia por células"/>
							<img src={product.celulasCriminales.mapaDeExpansionTerritorial} alt="" />
							<div className={styles.cedulaCardsContainer}>
							<CardCedula/>
							</div>
						</section>
					</div>
				)}
			</div>
		</>
	);
};

export default OrganizacionPage;
