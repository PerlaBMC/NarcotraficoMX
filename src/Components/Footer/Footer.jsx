import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineSystemSecurityUpdateWarning } from "react-icons/md";

const Footer = () => {
	return (
		<>
			<div className={styles.footerContainer}>
				<div className={styles.avisoLegal}>
					<p>
						<em>Aviso Legal: </em>La información presentada se obtuvo a través
						de consultas periodísticas y diversas fuentes web. Se recomienda
						manejarla con discreción y criterio. Esta información no constituye
						asesoramiento legal ni garantiza exactitud absoluta.
					</p>
				</div>
				<div className={styles.DirectorioPortales}>
					<Link to="/Politicas">
						<p>
							<MdOutlinePrivacyTip className={styles.icono} /> Políticas de
							Privacidad
						</p>
					</Link>
					{/*<a href="https://crimeflix.vercel.app/" target="_blanket">
						<p>
							<MdMovie className={styles.icono} /> Crimeflix
						</p>
					</a>*/}
					<Link to={"/Terminos"}>
					<p>
						<MdOutlineSystemSecurityUpdateWarning  className={styles.icono}/> Terminos y Condiciones</p>
					</Link>
				</div>
				<div className={styles.redes}>
					<a href="https://www.instagram.com/narcotrafico.mx/profilecard/?igsh=dnc5dW94MG9nN3dk" target="_blanket">
						<FaInstagram className={styles.instagram} />
					</a>
					<a href="https://www.tiktok.com/@narcotrafico.mx" target="_blanket">
						<FaTiktok className={styles.tiktok} />
					</a>
					<a href="https://www.youtube.com/@NarcotraficoMX" target="_blanket">
						<FaYoutube className={styles.youtube} />
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
