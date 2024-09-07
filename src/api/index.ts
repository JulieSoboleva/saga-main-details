import axios from 'axios';

const apiUrl = import.meta.env.VITE_SERVER_URL;
// 'http://localhost:7070/api/services';

export const getServicesApi = () => {
    return axios
        .get(apiUrl)
        .then((response) => response.data);
};

export const getItemDetailsApi = (id: string) => {
    return axios
        .get(`${apiUrl}/${id}`)
        .then((response) => response.data);
};