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
								<img
									src={org.mapaExpansionTerritorial}
									alt="Mapa de expansión territorial"
								/>
							</div>
						</section>
						<section className={styles.infOrg}>
							<p>{org.Descripcion}</p>
						</section>
						<section className={styles.organigramaContainer}>
							<h3>Organigrama</h3>
							<p>
								En esta sección encontrarás información detallada y estructurada
								sobre la trayectoria de los principales líderes del crimen
								organizado. Analizamos factores de riesgo, patrones de conducta
								y contextos sociales que contribuyeron a su vinculación con
								actividades delictivas, con el objetivo de identificar señales
								de alerta y promover estrategias de prevención.
							</p>
							{/* Pasamos el nombre de la organización como prop */}
							<Organigrama nombreOrganizacion={org.nombreOrganizacion} />
						</section>
						<section className={styles.containerCelulas}>
							<TituloDeSeccion titulo="Zona de influencia por células" />
							<img
								src={org.celulasCriminales.mapaDeExpansionTerritorial}
								alt="Mapa expansión territorial por células"
							/>
							<div className={styles.cedulaCardsContainer}>
								<p>
									Algunas de las células criminales más reconocidas asociadas
									con el {org.nombreOrganizacion} se han expandido a lo largo del
									territorio nacional. Desde un enfoque criminológico, es
									fundamental analizar la asociación entre estas
									microorganizaciones, ya que su colaboración fortalece al grupo
									delictivo en su conjunto. Además, cualquier conflicto interno
									entre estas células podría desencadenar enfrentamientos
									significativos, con repercusiones importantes para la
									seguridad local y nacional.
								</p>
								<CardCedula />
							</div>
						</section>
					</div>
				)}
			</div>
		</>
	);
};

export default OrganizacionPage;
