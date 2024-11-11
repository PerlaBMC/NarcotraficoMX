import styles from "./cardCedula.module.css"
import { useContext, useEffect } from "react";
import ProductContext from "../../Context/productContext";
import { useParams } from "react-router-dom";

const CardCedula = () => {
	const { getProduct, product } = useContext(ProductContext);
	const { id } = useParams();
	//onsole.log(id);

	useEffect(() => {
		getProduct(id);
		//console.log(getProduct);
	}, [getProduct, id]); 

  return (
		<>
	{product.id && (
	<div className={styles.CardsContainerCelulas}>
						<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.frontContent}>
							<img src={product.celulasCriminales.celulaUno.imagenDeAgrupación} alt="" />
							<p>{product.celulasCriminales.celulaUno.nombreDeAgrupacion}</p>
						</div>
						<div className={styles.content}>
							<p>
								{product.celulasCriminales.celulaUno.descipcionDeAgrupacion}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.frontContent}>
							<img src={product.celulasCriminales.celulaDos.imagenDeAgrupación} alt="" />
							<p>{product.celulasCriminales.celulaDos.nombreDeAgrupacion}</p>
						</div>
						<div className={styles.content}>
							<p>
								{product.celulasCriminales.celulaUno.descipcionDeAgrupacion}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.frontContent}>
							<img src={product.celulasCriminales.celulaTres.imagenDeAgrupación} alt="" />
							<p>{product.celulasCriminales.celulaTres.nombreDeAgrupacion}</p>
						</div>
						<div className={styles.content}>
							<p>
								{product.celulasCriminales.celulaTres.descipcionDeAgrupacion}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.frontContent}>
							<img src={product.celulasCriminales.celulaCuatro.imagenDeAgrupación} alt="" />
							<p>{product.celulasCriminales.celulaCuatro.nombreDeAgrupacion}</p>
						</div>
						<div className={styles.content}>
							<p>
								{product.celulasCriminales.celulaCuatro.descipcionDeAgrupacion}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.frontContent}>
							<img src={product.celulasCriminales.celulaCinco.imagenDeAgrupación} alt="" />
							<p>{product.celulasCriminales.celulaCinco.nombreDeAgrupacion}</p>
						</div>
						<div className={styles.content}>
							<p>
								{product.celulasCriminales.celulaCinco.descipcionDeAgrupacion}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<div className={styles.frontContent}>
							<img src={product.celulasCriminales.celulaSeis.imagenDeAgrupación} alt="" />
							<p>{product.celulasCriminales.celulaSeis.nombreDeAgrupacion}</p>
						</div>
						<div className={styles.content}>
							<p>
								{product.celulasCriminales.celulaSeis.descipcionDeAgrupacion}
							</p>
						</div>
					</div>
				</div>
	</div>
				) 
				}

		</>
	);
}

export default CardCedula