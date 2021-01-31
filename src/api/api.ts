import axios from 'axios';

export const getData = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})
