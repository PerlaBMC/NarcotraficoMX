import styles from "./organizaciones.module.css"
import { useContext, useEffect } from "react";
import OrgContext from "../../Context/productContext";
import { Link } from "react-router-dom";

const Organizaciones = () => {
    const { getOrganizaciones, organizaciones } = useContext(OrgContext);
	useEffect(() => {
		getOrganizaciones();
	}, [getOrganizaciones]);

  return (
    <>
    <div className={styles.containerOrg}>
        {
            organizaciones.map ((org) => (
                <div key={org.id}>
                    <Link to={`/Org/${org.id}`}>
                        <img src={org.imagen} alt="Logo Org" />
                    </Link>
                </div>
            )
        
        )
        }




       {/* <a href="/Org">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237714/NarcotraficoMX/2_fspslv.png" alt="Logo de Sinaloa" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237714/NarcotraficoMX/1_czd7ls.png" alt="Logo CJNG" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237714/NarcotraficoMX/11_xvux3c.png" alt="Logo Juárez" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237714/NarcotraficoMX/5_tedtpn.png" alt="Logo Golfo" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237715/NarcotraficoMX/3_khhr1z.png" alt="Logo Z" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237715/NarcotraficoMX/7_ov6z4z.png" alt="Logo CBL" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237714/NarcotraficoMX/6_duhssh.png" alt="Logo Caballeros Templarios" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237716/NarcotraficoMX/4_ca3gkg.png" alt="Logo Tijuana" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237714/NarcotraficoMX/10_dc8qbu.png" alt="Logo Noroeste" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237714/NarcotraficoMX/12_nqt9dp.png" alt="Logo Santa Rosa de Lima" />
        </a>
        <a href="">
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1730237715/NarcotraficoMX/8_zjhddf.png" alt="" />
        </a> */}

    </div>
    </>
  )
}

export default Organizaciones