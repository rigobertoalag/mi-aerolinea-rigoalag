import axios from 'axios'

const fetchCitiesSuccess = cities => ({
    type: 'FETCH_CITIES_SUCCESS',
    payload: { cities }
})

export const fetchCities = () => {
    return async dispatch => {
        try {
            let cities = await axios.get('http://localhost:3001/cities')
            dispatch(fetchCitiesSuccess(cities))
        }
        catch (e) {
            console.log(e)
        }
    }
}