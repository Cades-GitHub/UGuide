import axios from 'axios';

const GlobalApi = () => {
    const apiKey = `1f68bf60f0d04c97b940021024ab49b7`;

    // Create axios instance
    const axiosCreate = axios.create({
        baseURL: `https://api.rawg.io/api`
    });

    // Define functions to make requests
    const getGenreList = () => axiosCreate.get(`/genres?token&key=${apiKey}`);
    const getAllGames = () => axiosCreate.get(`/games?token&key=${apiKey}`);
    const searchGames = (query) => {
        return axiosCreate.get(`/games?search=${query}&token&key=${apiKey}`);
    };
    // Return functions or data that you want to expose
    return {
        getGenreList,
        getAllGames,
        searchGames
    };
};
  
export default GlobalApi;
