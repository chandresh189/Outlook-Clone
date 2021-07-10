import React from 'react';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import UndoIcon from '@material-ui/icons/UndoOutlined';
import OpenMailIcon from '@material-ui/icons/DraftsOutlined';
import SubContainer from './SubContainer'
import { useState } from 'react';
import "./SubHeading.css";

function SubHeading() {
    const [show, setData] = useState(false)
    return (
        <div className="main-section">
            <div className="sub-heading">
                <MenuIcon className="option-icon" />
                <button id='btn-1' onClick={()=>setData(!show)}><p>Send message</p></button>
                <button id='btn-2'> <OpenMailIcon id="btn-icon" /> Mark all as read</button>
                <button id='btn-3'> <UndoIcon id="btn-icon" /> Undo</button>
            </div>
            <SubContainer show = {show}/>
        </div>
    )
}

export default SubHeading
