import React from 'react';
import Account from '@material-ui/icons/AccountCircleOutlined';
import "./Mails.css";

function Mails(details) {
    return (
        <div>
            <div className="mails">
                <div className="mail-1">
                    <div className="mail-profile">
                        <Account />
                    </div>
                    <div className="mail-content">
                        <h4>{details.items.sender}</h4>
                        <h5>{details.items.sub}</h5>
                        <p>{details.items.msg}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mails
 