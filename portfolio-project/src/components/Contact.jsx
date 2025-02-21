import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id='contact' className='contact-section'>
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, feel free to email me at <a href='mailto:harsharoyal0365@gmail.com'>harsharoyal0365@gmail.com</a></p>
      <p>You can also find me on social media:</p>
      <ul className='social-links'>
        <li><a href='#' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
        <li><a href='#' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
      </ul>
    </section>
  );
}

export default Contact;