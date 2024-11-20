import styles from "./navBar.module.css";
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { Link } from "react-router-dom";
import { LiaBookDeadSolid } from "react-icons/lia";

const NavBar = () => {
	const { getOrganizaciones, organizaciones } = useContext(OrgContext);
	useEffect(() => {
		getOrganizaciones();
	}, [getOrganizaciones]);

	return (
		<>
			<div className={styles.navBarContainer}>
				<section className={styles.logoNavBar}>
					<a href="/">
						<h1>Narcotráfico MX</h1>
					</a>
				</section>
				<section className={styles.menuNavBar}>
					<a href="">Mapa</a>
					<div className={styles.dropDownNavBar}>
						<a href="">Organizaciones</a>
						<div className={styles.dropDownContent}>
							{organizaciones.map((org) => (
								<Link to={`/Org/${org.id}`}>
									<p>
										<LiaBookDeadSolid />
										{org.nombreOrganizacion}
									</p>
								</Link>
							))}
						</div>
					</div>
					<Link to={"Noticiero"}>Noticias</Link>
				</section>
			</div>
		</>
	);
};

export default NavBar;
