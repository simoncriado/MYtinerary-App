import React, { Component } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/citiesActions'

class Cities extends Component {
    componentDidMount() {
        this.props.fetchCities()
    }

    constructor(props) {
        super(props)
        this.state = {
            searchInput: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            searchInput: e.target.value
        })
        // this.props.onChange(event.target.value)
    }

    render() {
        const cities = this.props.cities.payload.filter(
            (city) => {
                return city.name.toLowerCase().startsWith(this.state.searchInput.toLowerCase());
            }
        );

        return (
            <div className="button">
                <input className="eachButton" type="text" value={this.state.searchInput} onChange={this.handleChange} />

                {cities.map((city) =>
                    <button className="eachButton" key={city._id}>
                        <Link to={"/itineraries/" + city.name}>{city.name}</Link>
                    </button>
                )}
                {/* <ul>
                    {cities.map((city) =>
                        <li key={city._id}>
                            <a href={"/itineraries/" + city.name}>{city.name}</a>
                        </li>
                    )}
                </ul> */}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteCity: (id) => { dispatch({ type: "DELETE_CITY", id: id }) }
//     }
// }

export default connect(mapStateToProps, { fetchCities })(Cities);