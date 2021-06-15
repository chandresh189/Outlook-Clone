import React from 'react'
import FeatureTray from './FeatureTray'
import MailHead from './MailHead'
import SendMail from './SendMail'
import "./SubContainer.css"

function SubContainer() {
    return (
        <div className="sub-container">
            <FeatureTray />
            <MailHead />
            <SendMail />
        </div>
    )
}

export default SubContainer
