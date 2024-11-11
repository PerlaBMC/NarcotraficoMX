import styles from "./perfil.module.css";
import CarouselFoto from "../../Components/CardCedula/Carrusel/Carrusel";

const Perfil = () => {
	return (
		<>
			<div className={styles.perfilContainer}>
				<section className={styles.datosGenerales}>
					<div className={styles.carruselFotos}>
						<CarouselFoto />
					</div>
					<div className={styles.fichaDeDatosContainer}>
						<div className={styles.fichaDeDatos}>
							<ul>
								<em>Nombre:</em> <p>Joaquín Guzmán Loera</p>
							</ul>
							<ul>
								<em>Alias:</em> <p>"El Chapo" y/o "JGL"</p>
							</ul>
							<ul>
								<em>Fecha de nacimiento:</em> <p>4 de abril de 1957</p>
							</ul>
							<ul>
								<em>Lugar de nacimiento:</em>{" "}
								<p>Badiraguato, Sinaloa, México</p>
							</ul>
							<ul>
								<em>Organización de pertenencia:</em> <p>Cártel de Sinaloa</p>
							</ul>
							<ul>
								<em>Función dentro de la organización:</em>{" "}
								<p>Líder del Cártel</p>
							</ul>
							<ul>
								<em>Situación penal:</em>{" "}
								<p>
									{" "}
									Sentenciado a cadena perpetua albergado en la prisión
									estadounidense ADX Florence
								</p>
							</ul>
						</div>
					</div>
				</section>
				<section className={styles.resumenDeVidaContainer}>
					<div className={styles.resumenDeVida}>
						<h1>
							Joaquín Guzmán Loera: La Historia de "El Chapo" y su Ascenso en el
							Narcotráfico
						</h1>
						<p>
							Joaquín Guzmán Loera, mejor conocido como "El Chapo," nació el 4
							de abril de 1957 en La Tuna, una comunidad rural de Badiraguato,
							Sinaloa, una región marcada por el cultivo de marihuana y amapola.
							Creció en un contexto de extrema pobreza y con un padre abusivo.
							Desde joven, Guzmán trabajó en el campo y estuvo expuesto al
							cultivo de plantas ilícitas, el único sustento económico en su
							región. La pobreza y la violencia de su entorno pronto lo
							empujaron a buscar un destino más allá de su comunidad.</p> 

              <img className={styles.imagenUno} src="https://i.pinimg.com/564x/47/e8/7a/47e87ad502bdd47a20c4aa6add58fe6c.jpg" alt="" />

              <h4>Los Inicios en el Narcotráfico </h4>
              <p> En la década de 1970, el joven Joaquín
							Guzmán se trasladó a Culiacán, capital de Sinaloa, donde comenzó a
							involucrarse en el narcotráfico bajo el ala de Miguel Ángel Félix
							Gallardo, conocido como "El Padrino" y líder del Cártel de
							Guadalajara, el grupo dominante de la época. En este entorno, "El
							Chapo" mostró su habilidad para la logística y la disciplina,
							características que lo hicieron destacar rápidamente. Gracias a su
							lealtad y eficiencia, ascendió en la organización, desempeñando un
							papel importante en el control de rutas de tráfico hacia Estados
							Unidos. </p>
              
              <h4>Creación del Cártel de Sinaloa y Expansión Internacional</h4>
              <p>Con el arresto de Félix Gallardo en 1989, el cártel se fragmentó,
							y Guzmán, junto a otros capos, fundó el Cártel de Sinaloa. Durante
							los años 90, Guzmán se consolidó como líder y expandió el alcance
							del cártel, innovando en rutas de transporte y técnicas de tráfico
							de drogas. Su visión logística llevó al desarrollo de túneles
							subterráneos entre México y Estados Unidos, permitiendo el tráfico
							de cocaína, marihuana y metanfetaminas a gran escala. Esta
							expansión le ganó fama como uno de los narcotraficantes más
							influyentes y peligrosos de su tiempo.</p> 
              
              <h4>La Primera Captura y la Fuga de 2001</h4>
              <p>En 1993, Guzmán fue arrestado en Guatemala y
							extraditado a México, donde fue sentenciado a 20 años de prisión.
							Durante su tiempo en prisión, no perdió el control de sus
							operaciones. El Chapo aprovechó la corrupción en el sistema
							penitenciario mexicano para mantener el liderazgo y, en 2001,
							protagonizó una fuga espectacular del penal de Puente Grande,
							Jalisco. Se dice que escapó escondido en un carrito de lavandería,
							demostrando una vez más su capacidad para desafiar al sistema.</p>

              <h4>El Resurgimiento y la Guerra de Cárteles </h4>
              <p> Tras su fuga, "El Chapo"
							regresó al liderazgo del Cártel de Sinaloa y enfrentó nuevas
							batallas. Durante los años 2000, el cártel creció aún más y entró
							en conflicto con grupos rivales, como el Cártel de los Zetas y el
							Cártel de Juárez, desatando una de las guerras más sangrientas en
							la historia del narcotráfico en México. Guzmán demostró
							habilidades estratégicas que le permitieron consolidar su poder en
							medio de una intensa lucha de cárteles y la creciente presión de
							las autoridades mexicanas y estadounidenses.</p>

              <img className={styles.imagenDos} src="https://elcierredigital.com/filesedc/uploads/image/post/protada_1200_800.webp" alt="" />
              
              <h4>La Segunda Captura y la Evasión de 2015 </h4>
              <p> En 2014, Joaquín Guzmán fue recapturado en
							Mazatlán, Sinaloa, en un operativo conjunto entre fuerzas de
							seguridad mexicanas y estadounidenses. Fue encarcelado en el penal
							de máxima seguridad del Altiplano, pero un año después, en 2015,
							protagonizó otra fuga espectacular. Guzmán escapó a través de un
							túnel de 1.5 kilómetros que conectaba su celda con una casa fuera
							del penal. Esta fuga impactó al mundo y fue evidencia de la
							sofisticación y recursos del Cártel de Sinaloa.</p>
              
              <h4>La Captura Final y Extradición a Estados Unidos </h4>
              <p> Tras meses de búsqueda, "El Chapo"
							fue recapturado en enero de 2016 en Los Mochis, Sinaloa, en un
							operativo de las fuerzas especiales mexicanas. Esta vez, el
							gobierno mexicano accedió a extraditarlo a los Estados Unidos,
							donde enfrentaba numerosos cargos relacionados con el
							narcotráfico, lavado de dinero, tráfico de armas y homicidio. En
							2019, fue declarado culpable en un tribunal de Nueva York y
							sentenciado a cadena perpetua en una prisión de máxima seguridad
							en Colorado. </p>
              
              <h4>La Narcocultura y el Legado de "El Chapo"</h4>
              <p> La historia de Joaquín Guzmán Loera representa una de las figuras más icónicas
							del narcotráfico en México. "El Chapo" se convirtió en un
							personaje mitificado en la narcocultura, influenciando la música
							de los narcocorridos y otras manifestaciones culturales. A través
							de su figura, se refleja el impacto del narcotráfico en la
							sociedad mexicana y la cultura popular, en la que,
							paradójicamente, algunos sectores lo ven como un símbolo de éxito
							y resistencia ante el sistema. </p>
              
              <h4>Conclusión: El Ascenso y Caída de "El Chapo" Joaquín "El Chapo"</h4>
              <p> Guzmán logró construir un imperio criminal que perduró por décadas, enfrentando y eludiendo a las
							autoridades en múltiples ocasiones. Su vida revela las complejas
							dinámicas de poder, violencia y corrupción que caracterizan al
							narcotráfico en México y en el mundo. Aunque ahora está tras las
							rejas, el legado de "El Chapo" sigue siendo tema de estudio y
							controversia, dejando una marca en la historia del crimen
							organizado y recordándonos las profundas raíces y desafíos del
							narcotráfico en nuestra sociedad.{" "}
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default Perfil;
