import React, { Component, useState } from 'react';
import cantaloupeClothing from '../img/cantaloupe-clothing.png';
import cantaloupeItem from '../img/cantaloupe-item.png';
import cantaloupeCheckout from '../img/cantaloupe-checkout.png';
import journalMain from '../img/journal-main.png';
import journalEntry from '../img/journal-entry.png';
import journalAbout from '../img/journal-about.png';
import rewindIntro from '../img/rewind-intro.png';
import rewindBoard from '../img/rewind-board.png';
import rewindHelp from '../img/rewind-help.png';



export default function Porfolio() {
  const [openCantaloupe, setOpenCantaloupe] = useState(false);
  const [openJournal, setOpenJournal] = useState(false);
  const [openRewind, setOpenRewind] = useState(false);

  const cantaloupeToggle = e => {
    e.preventDefault();
    setOpenCantaloupe(!openCantaloupe);
  }

  const journalToggle = e => {
    e.preventDefault();
    setOpenJournal(!openJournal);
  }

  const rewindToggle = e => {
    e.preventDefault();
    setOpenRewind(!openRewind);
  }
  
    return (
      <div className="PortfolioPage">
       {/* <Header/> */}
        <div id="portfolio">
          <div className="cantaloupe-project">
            <div className="cantaloupe-header">
              <h2>Cantaloupe</h2>
              <h3>An e-commerce store.</h3>
              <button onClick={cantaloupeToggle}>{openCantaloupe ? "-" : "+"}</button>
            </div>
            <div className={openCantaloupe ? "cantaloupe-body" : "hide-details"}> 
              <div className="project-preview">
                <div className="project-image"><img src={cantaloupeClothing}/></div>
                <div className="project-image"><img src={cantaloupeItem}/></div>
                <div className="project-image"><img src={cantaloupeCheckout}/></div>
              </div>
              <p>Technologies:</p>
              <ul>
                <li>Mongo DB</li>
                <li>Express</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>Stripe Payments</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>
          <div className="journal-project">
            <div className="journal-header">
              <h2>My Daily</h2>
              <h3>A daily journal.</h3>
              <button onClick={journalToggle}>{openJournal ? "-" : "+"}</button>
            </div>
            <div className={openJournal ? "journal-body" : "hide-details"}>
              <div className="project-preview">
                <div className="project-image"><img src={journalMain}/></div>
                <div className="project-image"><img src={journalEntry}/></div>
                <div className="project-image"><img src={journalAbout}/></div>
              </div>
              <p>Technologies:</p>
              <ul>
                <li>Mongo DB</li>
                <li>Express</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>External API</li>
                <li>SCSS</li>
              </ul>
            </div> 
          </div>
          <div className="rewind-project">
            <div className="rewind-header">
              <h2>2020 In Rewind</h2>
              <h3>A trivia game inspired by Family Feud.</h3>
              <button onClick={rewindToggle}>{openRewind ? "-" : "+"}</button>
            </div>
            <div className={openRewind ? "rewind-body" : "hide-details"}>
              <div className="project-preview">
                <div className="project-image"><img src={rewindIntro}/></div>
                <div className="project-image"><img src={rewindBoard}/></div>
                <div className="project-image"><img src={rewindHelp}/></div>
              </div>
              <p>Technologies:</p>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
