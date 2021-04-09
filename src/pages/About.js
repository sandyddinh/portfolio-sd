import React, { Component } from 'react';
import Header from '../components/Header';

export default function About () {
    return (
      <>
      <Header/>
      <div className="AboutPage">
        <div id="about">
          {/* <div className="about-body"> */}
            <h1>I design and build websites.</h1>
            <br/>
            <h2>I'm a multi-faceted human with over 6+ years of experience in management consulting, financial services, and digital engineering.</h2>
            <br/>
            <p>
              During my time in management consulting, I served a wide range of roles including Project Management and Business Analysis before finding my way to Digital Engineering projects as a QA Engineer. I helped a large Brazilian bank launch their millenial digital-only banking app. 
            </p>
            <br/>
            <p>
              When the pandemic hit, I comitted to developing my software engineering skillsets by completing an immersive bootcamp at General Assembly while still working a full time job. This experience re-affirmed my passion of coding. I hope you check out my portfolio.
            </p>
            <br/>
            <p>
              My other passion is yoga. I have been practicing for over 5 years and obtained my Yoga Teacher Training 200hr cerfication in 2018. My practice has influenced my mindful approach to coding.
            </p>

          </div>
        </div>
        {/* </div> */}
        </>
    );
}
