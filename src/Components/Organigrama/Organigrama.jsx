import styles from "./organigrama.module.css";
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { Link } from "react-router-dom";

const Organigrama = ({ nombreOrganizacion }) => {
  const { getMiembrosORg, miembros } = useContext(OrgContext);

  useEffect(() => {
    getMiembrosORg();
  }, [getMiembrosORg]);

  // Filtramos los miembros según la organización de pertenencia
  const miembrosFiltrados = miembros.filter(
    miembro => miembro.OrganizacionDePertenencia === nombreOrganizacion
  );

  return (
    <div className={styles.organigramaContainer}>
      {miembrosFiltrados.map(miembro => (
        <div key={miembro.id}>
          <Link to={`/Perfil/${miembro.id}`} className={styles.enlacePerfil}>
            <div className={styles.cardMiembro}>
              <section className={styles.fotoMiembro}>
                <img src={miembro.FotoInicial} alt="" />
              </section>
              <section className={styles.nombreMiembro}>
                <h2>{miembro.Nombre}</h2>
                <h3>"{miembro.Apodo}"</h3>
                <p>{miembro.FuncionDentroDeLaOrganizacion}</p>
              </section>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Organigrama;
