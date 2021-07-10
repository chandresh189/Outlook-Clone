import React, {useState} from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ExpandIcon from '@material-ui/icons/ExpandMoreOutlined';
import "./MailHead.css"
import Mails from './Mails';

function MailHead(props) {
    return (
        <div className="mail">
            <div className="mail-head">
                <div className="mail-head-left">
                    <CheckCircleIcon className="icon"/>
                    <button>Focused</button>
                    <button>Other</button>
                </div>
                <div className="mail-head-right">
                    <button>Filter <ExpandIcon /></button>
                </div>
            </div>
            {   
                props.obj.map((mail) => {
                return <Mails items={mail} key={mail.sno} />
            }) }

        </div>
    )
}

export default MailHead
