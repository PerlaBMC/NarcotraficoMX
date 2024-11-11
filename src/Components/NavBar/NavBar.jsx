import styles from "./navBar.module.css"

const NavBar = () => {
  return (
    <>
    <div className={styles.navBarContainer}>
    <section className={styles.logoNavBar}>
    <a href="/"><h1>Narcotráfico MX</h1></a>
    </section>
    <section className={styles.menuNavBar}>
    <a href="">Mapa</a>
    <a href="">Organizaciones</a>
    <a href="">Noticias</a>
    </section>
    </div>
    </>
  )
}

export default NavBar