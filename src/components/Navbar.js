import React from 'react';
import "./Navbar.css";
import AppsIcon from '@material-ui/icons/Apps';
import Forum from '@material-ui/icons/ForumOutlined';
import Note_alt from '@material-ui/icons/EventNoteOutlined';
import Event_available from '@material-ui/icons/EventAvailableOutlined';
import Notification from '@material-ui/icons/NotificationsNoneOutlined';
import Setting from '@material-ui/icons/SettingsOutlined';
import Help from '@material-ui/icons/ErrorOutlineOutlined';
import Brightness from '@material-ui/icons/Brightness4';
import Account from '@material-ui/icons/AccountCircleOutlined';

function Navbar() {
    return (
        <div>
            <header>
                <div className="header-left">
                    <AppsIcon className="icons" />
                    <p>CT-Mailer</p>
                </div>
                <div className="header-middle">
                    <span className="material-icons">search</span>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header-right" >
                    <Forum className="icons" />
                    <Note_alt className="icons" />
                    <Event_available className="icons" />
                    <Notification className="icons" />
                    <Setting className="icons" />
                    <Help className="icons" />
                    <Brightness className="icons" />
                    <p>CHANDRESH SINGH</p>
                    <Account className="icons" />
                </div>
            </header>
        </div>
    )
}

export default Navbar
