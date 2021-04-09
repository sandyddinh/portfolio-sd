import React, { Component } from 'react';
import Header from '../components/Header';

export default class Contact extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
          <div id="contact">
            LinkedIn: <a href="https://www.linkedin.com/in/sandy-dinh/">sandy-dinh</a>
            Email: <a href="mailto:sandyddinh@gmail.com">sandyddinh@gmail.com</a>
            Github: <a href="https://github.com/sandyddinh">sandyddinh</a>
          </div>
      </>
    );
  }
}
