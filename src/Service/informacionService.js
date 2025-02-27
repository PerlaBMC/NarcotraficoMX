import axios from "axios";

const URL_ROOT = "http://localhost:4000/api"
//const URL_ROOT = "https://narcotraficomxapi.onrender.com/api"

const getOrgsService = async () => {
    const response = await axios.get (`${URL_ROOT}/organizacion`);
return response
}

const getOrgService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/organizacion/${id}`)
    return response
}

const getMiembrosOrgService = async () => {
    const response = await axios.get (`${URL_ROOT}/miembros`);
return response
}

const getMiembroOrgService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/miembros/${id}`)
    return response
}


const getNoticiasService = async () => {
    const response = await axios.get (`${URL_ROOT}/noticia`);
return response
}

const getNoticiaService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/noticia/${id}`)
    return response
}




export {getOrgsService, 
        getOrgService, 
        getMiembrosOrgService,
        getMiembroOrgService,
        getNoticiasService,
        getNoticiaService
}