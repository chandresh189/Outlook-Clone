import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_name', e.target, 'target')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label><br />
      <input type="text" name="user_name" />
      <label>Email</label><br />
      <input type="email" name="user_email" />
      <label>Message</label><br />
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
