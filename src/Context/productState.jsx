import {useReducer, useCallback} from "react";
import OrgContext from "./productContext";
import productReducer from "./productReducer";
import PropTypes from "prop-types"
import Swal from "sweetalert2"

import {getOrgsService, getOrgService, getMiembroOrgService, getMiembrosOrgService, getNoticiasService, getNoticiaService } from "../Service/informacionService.js"

const initialState = {
	organizaciones: [],
	org: {},
	miembros: [],
	miembro: {},
	noticias: [],
	noticia: {}
};

const ProductState = ({ children }) => {
	const [globalState, dispatch] = useReducer(productReducer, initialState);


	const getOrganizaciones = useCallback(async () => {
		try {
			const response = await getOrgsService();
			//console.log (response.data.data)

			dispatch({
				type: "OBTENER_INFORMACION",
				payload: response.data.data,
			});

		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error al agregar producto al carrito",
				showCancelButton: false,
				timer: 1000,
			});
		}
	}, []);


	const getOrganizacion = useCallback(async(id) => {
		try {
			const response = await getOrgService(id);
			//console.log (response.data.data)

			dispatch({
				type: "OBTENER_INFORMACIONORG",
				payload: response.data.data,
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error al agregar producto al carrito",
				showCancelButton: false,
				timer: 1000,
			});
		}
	}, []);

	const getMiembrosORg = useCallback(async () => {
		try {
			const response = await getMiembrosOrgService();
			//console.log (response.data.data)

			dispatch({
				type: "OBTENER_INFORMACION_MIEMBROS",
				payload: response.data.data,
			});

		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error al agregar producto al carrito",
				showCancelButton: false,
				timer: 1000,
			});
		}
	}, []);

	const getMiembroOrg = useCallback(async(id) => {
		try {
			const response = await getMiembroOrgService(id);
			console.log (response.data.data)

			dispatch({
				type: "OBTENER_INFORMACION_MIEMBRO",
				payload: response.data.data,
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error al agregar producto al carrito",
				showCancelButton: false,
				timer: 1000,
			});
		}
	}, []);

	const getNoticias = useCallback(async () => {
		try {
			const response = await getNoticiasService();
			//console.log (response.data.data)

			dispatch({
				type: "OBTENER_NOTICIAS",
				payload: response.data.data,
			});

		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error al agregar producto al carrito",
				showCancelButton: false,
				timer: 1000,
			});
		}
	}, []);

	const getNoticia = useCallback(async(id) => {
		try {
			const response = await getNoticiaService(id);
			//console.log (response.data.data)

			dispatch({
				type: "OBTENER_NOTICIA",
				payload: response.data.data,
			});
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Error al agregar producto al carrito",
				showCancelButton: false,
				timer: 1000,
			});
		}
	}, []);


	return (
		<OrgContext.Provider
			value={{
				organizaciones: globalState.organizaciones,
				org: globalState.org,
				miembros: globalState.miembros,
				miembro: globalState.miembro,
				noticias: globalState.noticias,
				noticia: globalState.noticia,
				getOrganizaciones,
				getOrganizacion,
				getMiembroOrg,
				getMiembrosORg,
				getNoticias,
				getNoticia
			}}
		>
			{children}
		</OrgContext.Provider>
	);
};

ProductState.propTypes = {
 children: PropTypes.node,
}

export default ProductState;