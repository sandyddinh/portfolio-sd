import React, { Component } from 'react';

export default function Resume () {
    return (
      <div className="ResumePage">
          <div id="resume">
            <div className="resume-category">
              <h2>Engineering</h2>
              <hr/>
                <div className="skill-group">
                  <div className="skill-tag">Full Stack Web Developer</div>
                  <div className="skill-tag">Test Automation</div>
                </div>
            </div>

            <div className="resume-category">
              <h2>Technology</h2>
              <hr/>
              <div className="skill-group">
                <div className="skill-tag">JavaScript</div>
                <div className="skill-tag">React</div>
                <div className="skill-tag">HTML</div>
                <div className="skill-tag">CSS</div>
                <div className="skill-tag">SQL</div>
                <div className="skill-tag">Mongo</div>
                <div className="skill-tag">Ruby on Rails</div>
                <div className="skill-tag">Postgres</div>
                <div className="skill-tag">RESTful APIs</div>
                <div className="skill-tag">JIRA</div>
              </div>
            </div>

            <div className="resume-category">
              <h2>Business</h2>
              <hr/>
              <div className="skill-group">
                <div className="skill-tag">Business Process Management / Optimization</div>
                <div className="skill-tag">Business Analysis</div>
                <div className="skill-tag">Requiremnts Gathering</div>
                <div className="skill-tag">Stakeholder Management</div>
              </div>
            </div>

          </div>
      </div>
    );
  
}
