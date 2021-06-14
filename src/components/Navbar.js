import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <div>
            <header>
                <div className="header-left">                    <span className="material-icons">apps</span>
                    <p>CT-Mailer</p>
                </div>
                <div className="header-middle">
                    <span className="material-icons">search</span>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header-right">
                    <span className="material-icons">forum</span>
                    <span className="material-icons">note_alt</span>
                    <span className="material-icons">event_available</span>
                    <span className="material-icons">notifications</span>
                    <span className="material-icons">settings</span>
                    <span className="material-icons">help</span>
                    <span className="material-icons">campaign</span>
                    <p>CHANDRESH SINGH</p>
                    <span className="material-icons">account_circle</span>
                </div>
            </header>
        </div>
    )
}

export default Navbar
