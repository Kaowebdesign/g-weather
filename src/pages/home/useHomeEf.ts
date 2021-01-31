// Core
import {useEffect, useState} from "react";
// API
import {getData} from "../../api/api";
// Interfaces
import {IWeather} from "../../types/weather";

export const useHomeEf = () => {
    //  Set up API
    const API_KEY = '53e42a4d976a6057c8b087b919118982';
    const CITY = 'Dnipro';
    const UNITS = 'metric';

    const [weather, setWeather] = useState<IWeather | {}>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [welcome, setWelcome] = useState<boolean>(true);

    const handlerLoadWeather = async () => {
        setLoading(true);
        setWelcome(false);
        const result = await getData(`weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`);
        setWeather(result.data || {});
    }

    useEffect(() => {
        setLoading(false);
    },[weather]);

    return {
        weather,
        loading,
        welcome,
        setWelcome,
        handlerLoadWeather
    }
}
