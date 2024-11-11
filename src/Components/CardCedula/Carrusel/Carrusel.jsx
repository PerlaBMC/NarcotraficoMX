import Carousel from 'react-bootstrap/Carousel';
import styles from "./carrusel.module.css"

function CarouselFoto() {
  return (
 <>
 <div className={styles.carruselContainer}>
 <Carousel fade>
      <Carousel.Item interval={1000} className={styles.carruselItem}>
        <img src="https://www.shutterstock.com/editorial/image-editorial/OdT8c2w8O2D8kez4NjI1MA==/mexican-drug-lord-joaquin-guzman-loera-alias-1500w-9638043a.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={500} className={styles.carruselItem}>
       <img src="https://m.media-amazon.com/images/M/MV5BNzJiNjZjMTUtOWUyMy00YmRhLThiYTAtYzkzZmY4NDY0MzA1XkEyXkFqcGc@._V1_.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item className={styles.carruselItem}>
        <img src="https://columnaocho.com/loginwp/wp-content/uploads/2019/07/Chapo-1.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
 </div>
 </>
  );
}

export default CarouselFoto;