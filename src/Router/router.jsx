import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "../Components/NavBar/NavBar";
import HomePage from "../Pages/HomePage/HomePage";
import Footer from "../Components/Footer/Footer";
import OrganizacionPage from "../Pages/Organizaciones/OrganizacionPage";
import Perfil from "../Pages/Perfiles/Perfil";
import PoliticasDePrivacidad from "../Pages/PoliticasDePrivacidad/PoliticasDePrivacidad";
import NoticiaPage from "../Pages/NoticiaPage/NoticiaPage";
import NoticieroPage from "../Pages/NoticieroPage/NoticieroPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";





const AppRouter = () => {
  return (
		<BrowserRouter>
        <NavBar/>
			<Routes>
                <Route path="/" element={<HomePage/>} />
				<Route path="/Org/:id" element={<OrganizacionPage/>}/>
				<Route path="/Perfil/:id" element={<Perfil/>}/>
				<Route path="/Politicas" element={<PoliticasDePrivacidad/>}/>
				<Route path="/Noticia/:id" element={<NoticiaPage/>}/>
				<Route path="/Noticiero" element={<NoticieroPage/>}/>
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
            <Footer/>
		</BrowserRouter>
	);
}

export default AppRouter