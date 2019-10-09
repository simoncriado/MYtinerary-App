import axios from 'axios';

export function fetchingCities() {
    return { type: "FETCH_CITIES_DATA" };
}

export function fetchCitiesSuccess(cities) {
    return {
        type: "FETCH_CITIES_SUCCESS",
        cities
    };
}

export function fetchCitiesFailure(error) {
    return {
        type: "FETCH_CITIES_FAILURE",
        error
    };
}

export function fetchCities() {
    return dispatch => {
        dispatch(fetchingCities());
        axios.get("https://ubiqum-mern-api.herokuapp.com/api/cities/").then(res => {
            dispatch(fetchCitiesSuccess(res.data));
        }).catch(err => {
            dispatch(fetchCitiesFailure(err.response.statusText));
        });
    };
}

// export const fetchCities = () => {
//     return {
//         type: FETCH_CITIES
//     }
// }

// export function FETCH_CITIES() {

// }

// const getCities = { type: 'ADD_CITIES', city: 'all cities' }

// store.dispatch(getCities)


// constructor(props) {
//     super(props);
//     this.state = {
//         cities: [],
//     };
// }
// componentDidMount() {
//     fetch('https://ubiqum-mern-api.herokuapp.com/api/cities/')
//         .then(response => response.json())
//         .then(data => this.setState({ cities: data }))
// }