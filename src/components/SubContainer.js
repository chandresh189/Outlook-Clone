import React from 'react'
import FeatureTray from './FeatureTray'
import MailHead from './MailHead'
import SendMail from './SendMail'
import "./SubContainer.css"

function SubContainer(props) {
    console.log(props);
    return (
        <div className="sub-container">
            <FeatureTray />
            <MailHead />
            {
                props.show?<SendMail />:null
            }
        </div>
    )
}

export default SubContainer
