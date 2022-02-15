import axios from 'axios'

const fetchCitiesSuccess = cities => ({
    type: 'FETCH_CITIES_SUCCESS',
    payload: { cities }
})

export const fetchCities = () => {
    return async dispatch => {
        try {
            let cities = await axios.get('https://mi-aerolinea-api.herokuapp.com/cities')
            dispatch(fetchCitiesSuccess(cities))
        }
        catch (e) {
            console.log(e)
        }
    }
}