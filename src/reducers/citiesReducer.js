const initState = {
    isLoading: false,
    payload: [],
    error: {}
}

export default function citiesReducer(state = initState, action) {
    switch (action.type) {
        case "FETCH_CITIES_DATA":
            return {
                ...state,
                isLoading: true
            };
        case "FETCH_CITIES_SUCCESS":
            console.log(action.cities)
            return {
                ...state,
                payload: action.cities,
                error: {},
                isLoading: false
            };
        case "FETCH_CITIES_FAILURE":
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return state;
    }
}

// export default function citiesReducer(state = initState, action) {
//     if (action.type === 'FETCH_CITIES') {
//         return {
//             payload: [...initState.payload, action.cities]
//         }
//     }
//     return state;
// }