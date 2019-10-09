import React, { Component } from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Logo />
                <p className="text">Find your perfect trip, designed by insiders who know and love their cities.</p>
                <h2 className="text">Start browsing</h2>
                <Link to="/cities"> <img className="arrow" src="../circled-right-2.png" alt="black arrow" /></Link>
                <p className="text">Want to build your own MYtinerary?</p>
                <div className="links">
                    <Link to="/Login.js">Log in</Link>
                    <Link to="/CreateAccount.js">Create Account</Link>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;