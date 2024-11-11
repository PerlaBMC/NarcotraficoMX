import styles from "./politicasDePrivacidad.module.css";
import TituloDeSeccion from "../../Components/TituloDeSección/TituloDeSeccion";

const PoliticasDePrivacidad = () => {
	return (
		<>
			<div className={styles.politicasContainer}>
				<TituloDeSeccion titulo="Política de Privacidad y Uso de Información" />
				<p>
					En Narcotrafico MX (en adelante "el sitio"), nos comprometemos a
					proteger la privacidad de nuestros usuarios y a garantizar la
					transparencia sobre el uso de la información que recopilamos. Este
					sitio tiene fines académicos e informativos, y se centra en la
					recopilación de información periodística en materia de narcotráfico y
					delincuencia organizada en México. Nuestra política de privacidad está
					diseñada para cumplir con los lineamientos de privacidad y seguridad
					requeridos por Google AdSense. Al acceder o usar Narcotrafico MX, el
					usuario acepta los términos de esta política. Le recomendamos que lea
					detenidamente la siguiente información para comprender cómo se
					recopila, usa y protege su información.
				</p>

				<h4>Información que Recopilamos</h4>

				<p>
					En Narcotrafico MX recopilamos información para proporcionar una mejor
					experiencia de usuario y cumplir con nuestros objetivos informativos y
					académicos. Esta información se clasifica en las siguientes
					categorías:
					<li>
						Información Personal: Datos que el usuario proporciona
						voluntariamente, como nombre, dirección de correo electrónico y
						comentarios en publicaciones. Estos datos solo se recopilan si el
						usuario decide proporcionarlos mediante formularios de contacto o
						comentarios en el sitio.
					</li>
					<li>
						Información de Navegación: Datos que se recopilan automáticamente a
						través de cookies y tecnologías similares, que pueden incluir la
						dirección IP, tipo de dispositivo, navegador, tiempo de acceso y
						páginas visitadas en el sitio. Esta información se usa para mejorar
						la funcionalidad del sitio y personalizar el contenido.
					</li>
				</p>
				<h4>Uso de la Información Recopilada</h4>
				<p>
					La información recopilada en Narcotrafico MX se utiliza con los
					siguientes propósitos:
					<li>
						Fines Académicos e Informativos: La información se recopila y se
						presenta con el objetivo de facilitar el acceso a contenido
						periodístico y académico sobre narcotráfico y delincuencia
						organizada en México. No promovemos ni incentivamos ninguna
						actividad ilegal.
					</li>
					<li>
						Optimización del Sitio: Los datos de navegación nos permiten mejorar
						el rendimiento y la funcionalidad del sitio, personalizando el
						contenido según los intereses de nuestros usuarios.{" "}
					</li>
					<li>
						Publicidad: Utilizamos servicios de terceros, como Google AdSense,
						para ofrecer publicidad personalizada a los usuarios. Google AdSense
						puede usar cookies para personalizar los anuncios que se muestran en
						función de la actividad de navegación del usuario en este y otros
						sitios web.
					</li>
				</p>
				<h4>Uso de Cookies y Tecnologías Similares</h4>
				<p>
					Este sitio utiliza cookies y tecnologías de seguimiento para:
					<li>
						Mejorar la experiencia de usuario y personalizar el contenido.
					</li>
					<li>
						Facilitar el funcionamiento de la publicidad mediante servicios de
						terceros, como Google AdSense.
					</li>
					El usuario tiene la opción de deshabilitar las cookies desde la
					configuración de su navegador. Sin embargo, deshabilitar las cookies
					puede afectar algunas funcionalidades del sitio.
				</p>

				<h4> Compartición de Información con Terceros</h4>
				<p>
					Narcotrafico MX no comparte información personal de los usuarios con
					terceros, excepto en los siguientes casos:
					<li>
						Publicidad: Colaboramos con socios publicitarios, como Google
						AdSense, que pueden acceder a información de navegación mediante
						cookies, con el fin de ofrecer anuncios relevantes. Estos terceros
						no tienen acceso a información personal identificable.
					</li>
					<li>
						Cumplimiento Legal: Podemos divulgar información si estamos
						obligados por ley o si creemos de buena fe que dicha acción es
						necesaria para cumplir con procesos legales, responder a
						reclamaciones o proteger los derechos, la propiedad o la seguridad
						de Narcotrafico MX y sus usuarios.
					</li>
				</p>
				<h4>Seguridad de la Información</h4>
				<p>
					Tomamos las medidas de seguridad necesarias para proteger la
					información personal de los usuarios. Utilizamos protocolos de
					encriptación y otros métodos para evitar el acceso no autorizado,
					pérdida, modificación o divulgación de la información almacenada en
					nuestro sitio. Sin embargo, el usuario debe entender que ninguna
					medida de seguridad es completamente infalible.
				</p>
				<h4>Derechos del Usuario</h4>
				<p>
					Los usuarios de Narcotrafico MX tienen los siguientes derechos en
					relación con su información personal:
					<li>Acceder y solicitar información sobre sus datos personales.</li>
					<li>Rectificar la información en caso de errores.</li>
					<li>
						Solicitar la eliminación de su información personal, en los casos
						aplicables.
					</li>
					Para ejercer estos derechos, el usuario puede ponerse en contacto con
					nosotros a través del correo electrónico proporcionado en nuestro
					sitio.
				</p>
				<h4>Enlaces a Sitios de Terceros</h4>
				<p>
					Nuestro sitio puede contener enlaces a sitios de terceros.
					Narcotrafico MX no se hace responsable de las políticas de privacidad
					o el contenido de estos sitios externos. Recomendamos al usuario
					revisar las políticas de privacidad de cada sitio que visite.
				</p>
				<h4>Cambios a esta Política de Privacidad</h4>
				<p>
					Narcotrafico MX se reserva el derecho de actualizar esta política de
					privacidad en cualquier momento. Los cambios serán notificados
					mediante la actualización de la fecha de revisión en la parte superior
					de este documento. Le recomendamos revisar esta política
					periódicamente para mantenerse informado sobre cómo protegemos su
					información.
				</p>
				<h4>Contacto</h4>
				<p>
					Si tiene alguna pregunta o inquietud sobre esta política de
					privacidad, puede ponerse en contacto con nosotros a través del correo
					electrónico <a href="">narcotraficomx@gmail.com</a>.
				</p>
			</div>
		</>
	);
};

export default PoliticasDePrivacidad;
