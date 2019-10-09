import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                {window.location.href.includes('/home') ? <img className="arrow1" src="././homeIcon.png" alt="home logo" /> : <Link to="/"><img className="arrow1" src="././homeIcon.png" alt="home logo" /></Link>}
            </div>
        );
    }
}

export default Footer;