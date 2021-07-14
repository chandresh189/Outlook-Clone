import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import "./SendMail.css"
import env from "react-dotenv";

function SendMail(props) {
    
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [cc, setCc] = useState("");

    function HandleSubmit(e) {
        e.preventDefault();
        sendEmail(e);
        if(!to || !message) {
            alert("Can't be Empty")
        }
        else {
            props.GetDataFromSendMail(to, subject, message, cc);
        }
    }
    
    function sendEmail(e) {
        e.preventDefault();
        console.log(env.SECRET);
        emailjs.sendForm('gmail', 'template_q3byg2l', e.target, `${env.SECRET}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="send-mail">
            <form action="" onSubmit={HandleSubmit}>
                <div className="input">
                    <button>To</button>
                    <input type="text" placeholder="" name="to" value={to} onChange = {(e) => setTo(e.target.value)} id="to" />
                </div>
                <div className="input">
                    <button>Cc</button>
                    <input type="text" placeholder="" name="cc" value={cc} onChange = {(e) => setCc(e.target.value)} id="cc" />
                </div>
                <input className="bor" type="text" value={subject} placeholder="Add a Subject" name="subject" onChange = {(e) => setSubject(e.target.value)} id="subject" /> <br />
                <input className="bor" type="textarea" value={message} name="message" onChange = {(e) => setMessage(e.target.value)} id="message" />
                <div className="buttons">
                    {/* <button id="send-btn" onClick={()=>props.addToListHandeler({subject: 'this is redux subject', message: 'this is a redux message'})}>Send</button> */}
                    <button id="send-btn" >Send</button>
                    <button id="discard-btn">Discard</button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
