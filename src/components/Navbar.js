import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

class Navbar extends React.Component {

    render() {

        return (
            <div className="navbar">
                <div className="navbar-title">
                    COUNTERPOINT GENERATOR
                </div>
                <div className="menu-items">
                    <div className="menu-link" onClick={() => window.location.reload()}>
                        <Link to="/create">CREATE</Link>
                    </div>
                    <div className="menu-link" onClick={() => window.location.reload()}>
                        <Link to="/gallery">GALLERY</Link>
                    </div>
                    <div className="menu-link" onClick={() => window.location.reload()}>
                        <Link to="/about">ABOUT</Link>
                    </div>
                    <div className="menu-link">
                        <Link to="/landing">HOME</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar
