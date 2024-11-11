import axios from "axios";

const URL_ROOT = "http://localhost:4000/api"
//const URL_ROOT = "https://mc-full-backend.onrender.com/api"

const getProdusctsService = async () => {
    const response = await axios.get (`${URL_ROOT}/organizacion`);
return response
}

const getProductService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/organizacion/${id}`)
    return response
}


export {getProdusctsService, 
        getProductService, 
}