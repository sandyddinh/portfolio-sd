import React from 'react';
import linkedIn from '../img/linkedin.svg';
import github from '../img/github.svg';
import mail from '../img/mail.svg';

export default function Contact () {
    return (
      <div id="ContactPage">
          <div id="contact">
            <div className="top"></div>
            <div className="social">
              <img src={github} className="social-icon"/> <a href="https://github.com/sandyddinh">sandyddinh</a>
            </div>
            <div className="social">
              <img src={linkedIn} className="social-icon"/> <a href="https://www.linkedin.com/in/sandy-dinh/">sandy-dinh</a>
            </div>
            <div className="social">
              <img src={mail} className="social-icon"/> <a href="mailto:sandyddinh@gmail.com">sandyddinh@gmail.com</a>
            </div>
          </div>
      </div>
    );
}
