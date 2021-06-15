import React from 'react';
import "./SidebarIcon.css";
import Email from '@material-ui/icons/EmailOutlined';
import Calendar from '@material-ui/icons/DateRangeOutlined';
import People from '@material-ui/icons/PeopleOutlined';
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import Done from '@material-ui/icons/DoneOutlineOutlined';
import Description from '@material-ui/icons/DescriptionOutlined';
import Apps from '@material-ui/icons/AppsOutlined';
import Subject from '@material-ui/icons/SubjectOutlined';




function SidebarIcon() {
    return (
        <div className="sidebar_icons">
            <Email className="icons" />
            <Calendar className="icons" />
            <People className="icons" />
            <AttachFile className="icons" />
            <Done className="icons" />
            <Description className="icons" />
            <Apps className="icons" />
            <Subject className="icons" />

        </div>
    )
}

export default SidebarIcon
