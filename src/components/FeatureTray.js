import React from 'react'
import "./FeatureTray.css"
import InboxIcon from '@material-ui/icons/InboxOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';
import CreateIcon from '@material-ui/icons/CreateOutlined';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import ExpandIcon from '@material-ui/icons/ExpandMoreOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlineOutlined';
import SpamIcon from '@material-ui/icons/NotInterestedOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import NoteIcon from '@material-ui/icons/NoteOutlined';

function FeatureTray() {
    return (
        <div className="features">
            <button id="f-btn" ><ExpandIcon className="features-icon" /><p>Favourites</p></button>
            <button id="f-btn-inbox"><InboxIcon className="features-icon" /><p>Inbox</p></button>
            <button id="f-btn" ><SendIcon className="features-icon" /><p>Sent</p></button>
            <button id="f-btn" ><CreateIcon className="features-icon" /><p>Drafts</p></button>
            <button id="f-btn" ><StarIcon className="features-icon" /><p>Starred</p></button>
            <button id="f-btn" ><DeleteIcon className="features-icon" /><p>Deleted</p></button>
            <button id="f-btn" ><SpamIcon className="features-icon" /><p>Spam</p></button>
            <button id="f-btn" ><ArchiveIcon className="features-icon" /><p>Archived</p></button>
            <button id="f-btn" ><NoteIcon className="features-icon" /><p>Notes</p></button>
            <button id="f-btn" ><ExpandIcon className="features-icon" /><p>More</p></button>
        </div>
    )
}

export default FeatureTray
