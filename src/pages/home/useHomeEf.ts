// Core
import {useEffect, useState} from "react";
// API
import {getData} from "../../api/api";
// Interfaces
import {IWeather} from "../../types/weather";
import * as Location from 'expo-location';

export const useHomeEf = () => {
    //  Set up API
    const API_KEY = '53e42a4d976a6057c8b087b919118982';
    const CITY = 'Dnipro';
    const UNITS = 'metric';

    const [weather, setWeather] = useState<IWeather | {}>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [welcome, setWelcome] = useState<boolean>(true);
    const [location, setLocation] = useState(null);
    const [errors, setErrors] = useState<string>('');

    const handlerLoadWeather = async () => {
        setLoading(true);
        setWelcome(false);
        if(location) {
            const { coords: { latitude, longitude } } = location;
            const result = await getData(`weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${UNITS}`);
            setWeather(result.data || {});
        } else {
            setErrors('Can not define any location');
            setWeather({});
        }   
    }

    useEffect(() => {
        setLoading(false);
    },[weather]);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                setErrors('Permission to access location was denied');
                return;
            }
      
            const location = await Location.getCurrentPositionAsync();
            setLocation(location);
        })();
    },[]);

    useEffect(() => {
        
        
    },[location])

    return {
        weather,
        loading,
        welcome,
        setWelcome,
        handlerLoadWeather,
        location,
        errors
    }
}
