import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { useParams } from "react-router-dom";
import styles from "./organizacion.module.css";
import TituloDeSeccion from "../../Components/TituloDeSección/TituloDeSeccion";
import CardCedula from "../../Components/Organizaciones/CardCedula";
import Organigrama from "../../Components/Organigrama/Organigrama";

const OrganizacionPage = () => {
	const { getOrganizacion, org } = useContext(OrgContext);
	const { id } = useParams();

	useEffect(() => {
		getOrganizacion(id);
	}, [getOrganizacion, id]);

	return (
		<>
			<div className={styles.OrganizacionPageContainer}>
				{org.id && (
					<div className={styles.OrganizacionPageContainer}>
						<section className={styles.bannerORg}>
							<h2>{org.nombreOrganizacion}</h2>
							<div className={styles.logoORg}> 
								<img src={org.imagen} alt="Logo de Org" />
							</div>
							<div className={styles.mapaOrg}>
								<img src={org.mapaExpansionTerritorial} alt="Mapa de expansión territorial" />
							</div>
						</section>
						<section className={styles.infOrg}>
							<p>{org.Descripcion}</p>
						</section>
						<section className={styles.organigramaContainer}>
							<h3>Organigrama</h3>
							{/* Pasamos el nombre de la organización como prop */}
							<Organigrama nombreOrganizacion={org.nombreOrganizacion} />
						</section>
						<section className={styles.containerCelulas}>
							<TituloDeSeccion titulo="Zona de influencia por células"/>
							<img src={org.celulasCriminales.mapaDeExpansionTerritorial} alt="Mapa expansión territorial por células" />
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
               