const cities = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CITIES_SUCCESS':
            return action.payload.cities
        default:
            return state
    }
}

export default cities