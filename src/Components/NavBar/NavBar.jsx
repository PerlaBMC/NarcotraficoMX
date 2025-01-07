import styles from "./navBar.module.css";
import { useState, useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { Link } from "react-router-dom";
import { LiaBookDeadSolid } from "react-icons/lia";

const NavBar = () => {
  const { getOrganizaciones, organizaciones } = useContext(OrgContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getOrganizaciones();
  }, [getOrganizaciones]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={styles.navBarContainer}>
      <section className={styles.logoNavBar}>
        <a href="/">
          <h1>Narcotráfico MX</h1>
        </a>
      </section>
      <section className={`${styles.menuNavBar} ${menuOpen ? styles.open : ""}`}>
      <Link to={"/AboutUs"}>Acerca de nosotros</Link>
        <Link to={"Noticiero"}>Noticias</Link>
        <div className={styles.dropDownNavBar}>
          <a>Organizaciones</a>
          <div className={styles.dropDownContent}>
            {organizaciones.map((org) => (
              <Link to={`/Org/${org.id}`} key={org.id}>
                <p>
                  <LiaBookDeadSolid />
                  {org.nombreOrganizacion}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
	  <section className={styles.buttonMobile}>
	  <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
	  </section>
    </div>
  );
};

export default NavBar;
