import Carousel from 'react-bootstrap/Carousel';
import styles from "./carrusel.module.css";
import { useContext, useEffect } from "react";
import OrgContext from '../../../Context/productContext';
import { useParams } from "react-router-dom";

function CarouselFoto() {
	const { getMiembroOrg, miembro } = useContext(OrgContext);
	const { id } = useParams();
	//console.log(id);

	useEffect(() => {
		getMiembroOrg(id);
		//console.log(getOrganizacion);
	}, [getMiembroOrg, id]);

  return (
 <>
{miembro.id && (
  <div className={styles.carruselContainer}>
  <Carousel fade>
       <Carousel.Item interval={1000} className={styles.carruselItem}>
         <img src={miembro.Fotos.Perfiles.perfilUno} alt="Perfil Uno" />
       </Carousel.Item>
       <Carousel.Item interval={500} className={styles.carruselItem}>
        <img src={miembro.Fotos.Perfiles.perfilDos} alt="Perfil Dos" />
       </Carousel.Item>
       <Carousel.Item className={styles.carruselItem}>
         <img src={miembro.Fotos.Perfiles.perfilTres} alt="Perfil Tres" />
       </Carousel.Item>
     </Carousel>
  </div>
)}

 {/*<div className={styles.carruselContainer}>
 <Carousel fade>
      <Carousel.Item interval={1000} className={styles.carruselItem}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1731513728/NarcotraficoMX/CDS/1_nw4nnm.png" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={500} className={styles.carruselItem}>
       <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1731513728/NarcotraficoMX/CDS/2_rviti6.png" alt="" />
      </Carousel.Item>
      <Carousel.Item className={styles.carruselItem}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1731513728/NarcotraficoMX/CDS/3_nccf1t.png" alt="" />
      </Carousel.Item>
    </Carousel>
 </div>*/}
 </>
  );
}

export default CarouselFoto;