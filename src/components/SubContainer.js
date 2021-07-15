import React, {useState} from 'react'
import FeatureTray from './FeatureTray'
import MailHead from './MailHead'
import SendMail from './SendMail'
import "./SubContainer.css"

function SubContainer(props) {
    const [mailItems, setMail] = useState ([
        {   
            sno: 1,
            sub: 'Subject 1',
            msg: 'This is a message.',
            sender: 'Me'
        },
        {
            sno: 2,
            sub: 'Subject 2',
            msg: 'This is another message,',
            sender: 'From CS'
        }
    ]);

    function GetDataFromSendMail(to, subject, message, cc) {
        let sno = mailItems[mailItems.length-1].sno+1;
        const myMail = {
            sno: sno,
            sub: subject,
            msg: message,
            sender: to
        }
        setMail([myMail, ...mailItems]);
    }
    return (
        <div className="sub-container">
            <FeatureTray />
            <MailHead obj={mailItems}/>
            {
                props.show?<SendMail GetDataFromSendMail={GetDataFromSendMail} />:null
            }
        </div>
    )
}

export default SubContainer
