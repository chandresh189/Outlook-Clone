import React from 'react';
import Account from '@material-ui/icons/AccountCircleOutlined';
import "./Mails.css";

function Mails() {
    return (
        <div className="mails">
            <div className="mail-1">
                <div className="mail-profile">
                    <Account />
                </div>
                <div className="mail-content">
                    <h4>Title of Mail</h4>
                    <h5>Subject</h5>
                    <p>This is a Message, just for testing</p>
                </div>
            </div>
        </div>
    )
}

export default Mails
