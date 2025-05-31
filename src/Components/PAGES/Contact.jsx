import React from 'react'
import { useRef } from 'react';

import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_b50e08n',
      'template_hyuxh1l',
      form.current,
      'WHTEW8Ps9-2U_9fEV'
    )
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.error('error', error.text);
        alert('Message are not sent successfully');
      });
  };
  return (
    <div>
      <div className="contact" data-aos="zoom-in">
        <h1 className="contact-head">
          Contact Us
        </h1>
        <div className="contact-para">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </div>
        <div className="form">
          <form  ref={form} onSubmit={sendEmail} >
            <div className="input-section">
              <div className="first-inpt">
                <label>Name</label><br />
                <input type="text" name='name' required placeholder='Enter your name' autocomplete="off" />
              </div>
              <div className="first-inpt">
                <label>Email</label><br />
                <input type="email" name='email' required placeholder='Enter email address' autocomplete="off" />
              </div>
            </div>

            <div className="input-section-2">
              <label>Subject</label><br />
              <input type="text" name='message' required placeholder='write a subject' autocomplete="off" />
            </div>
            <label className='msg'>Message</label><br />
            <textarea placeholder='Write your message'name='message'></textarea>
            <button className='contact-button' type='submit'>Send</button>
          </form>

        </div>
        <div className="detail">

        </div>
      </div>
    </div>
  )
}

export default Contact