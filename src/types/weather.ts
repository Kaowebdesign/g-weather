export interface IWeather {
    base: String,
    clouds: object,
    cod: number,
    coord: object,
    dt: number,
    id: number,
    main: Object,
    name: String,
    sys: Object,
    timezone?: number,
    visibility?: number,
    weather?: Array<{}>,
    wind: Object
}
