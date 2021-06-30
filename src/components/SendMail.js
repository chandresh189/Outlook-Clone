import React from 'react'
import "./SendMail.css"

function SendMail(props) {
    return (
        <div className="send-mail">
            <form action="">
                <div className="input">
                    <button>To</button>
                    <input type="text" placeholder="" name="to" id="to" />
                </div>
                <div className="input">
                    <button>Cc</button>
                    <input type="text" placeholder="" name="cc" id="cc" />
                </div>
                <input className="bor" type="text" placeholder="Add a Subject" name="subject" id="subject" /> <br />
                <input className="bor" type="textbox" name="message" id="message" />
                <div className="buttons">
                    <button id="send-btn">Send</button>
                    <button id="discard-btn">Discard</button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
