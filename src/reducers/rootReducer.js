import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'

// const rootReducer = (state = initState, action) => {
//     if (action.type === 'DELETE_CITY') {
//         let newCities = state.cities.filter(city => {
//             return action
//         })
//     }
//     if (action.type === 'ADD_CITIES') {
//         return {
//             cities: [...state.cities, action.city]
//         }
//     }
//     return state;
// }

export default combineReducers({
    cities: citiesReducer
})