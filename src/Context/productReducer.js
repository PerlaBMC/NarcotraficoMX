const reducer = (globalState, action) => {
	switch (action.type) {
		case "OBTENER_INFORMACION":
			return {
				...globalState,
				organizaciones: action.payload,
			};

		case "OBTENER_INFORMACIONORG":
			return {
				...globalState,
				org: action.payload,
			};

		case "OBTENER_INFORMACION_MIEMBROS":
			return {
				...globalState,
				miembros: action.payload,
			};

		case "OBTENER_INFORMACION_MIEMBRO":
			return {
				...globalState,
				miembro: action.payload,
			};

		case "OBTENER_NOTICIAS":
			return {
				...globalState,
				noticias: action.payload,
			};

		case "OBTENER_NOTICIA":
			return {
				...globalState,
				noticia: action.payload,
			};

		default:
			return globalState;
	}
};

export default reducer;
