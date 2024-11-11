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





const AppRouter = () => {
  return (
		<BrowserRouter>
        <NavBar/>
			<Routes>
                <Route path="/" element={<HomePage/>} />
				<Route path="/Org/:id" element={<OrganizacionPage/>}/>
				<Route path="/Perfil" element={<Perfil/>}/>
				<Route path="/Politicas" element={<PoliticasDePrivacidad/>}/>
				<Route path="/Noticia" element={<NoticiaPage/>}/>
			</Routes>
            <Footer/>
		</BrowserRouter>
	);
}

export default AppRouter