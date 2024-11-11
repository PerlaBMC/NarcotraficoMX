import {useReducer, useCallback} from "react";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import PropTypes from "prop-types"
import Swal from "sweetalert2"

import {getProdusctsService, getProductService } from "../Service/informacionService.js"

const initialState = {
	products: [],
	product: {},
	cart: [],
};

const ProductState = ({ children }) => {
	const [globalState, dispatch] = useReducer(productReducer, initialState);


	const getProducts = useCallback(async () => {
		try {
			const response = await getProdusctsService();
			//console.log (response.data.data)

			dispatch({
				type: "OBTENER_PRODUCTOS",
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


	const getProduct = useCallback(async (id) => {
		try {
			const response = await getProductService(id);
			//console.log (response.data.data)

			dispatch({
				type: "OBTENER_PRODUCTO",
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
		<ProductContext.Provider
			value={{
				products: globalState.products,
				product: globalState.product,
				cart: globalState.cart,
				getProducts,
				getProduct,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

ProductState.propTypes = {
 children: PropTypes.node,
}

export default ProductState;