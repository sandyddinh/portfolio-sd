import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <div id="portfolio">
          <div className="cantaloupe-project">
            <div className="cantaloupe-header" onClick={cantaloupeToggle}>
              <h2>Cantaloupe</h2>
              <h3>An e-commerce store.</h3>
            </div>
            <div className={openCantaloupe ? "cantaloupe-body" : "hide-details"}> 
              <hr/>
              <div className="project-links">
                <a href="https://cantaloupe-store.herokuapp.com/" target="_blank"><button className="demo-button">DEMO</button></a>
                <a href="https://github.com/sandyddinh/cantaloupe/blob/main/README.md" target="_blank"><button className="readme-button">README</button></a>
              </div>
              <div className="project-preview">
                <div className="project-image"><img src={cantaloupeClothing}/></div>
                <div className="project-image"><img src={cantaloupeItem}/></div>
                <div className="project-image"><img src={cantaloupeCheckout}/></div>
              </div>
              <div className="technologies">
                {/* <p>Solutions Stack</p><br/> */}
                  <div className="tech-stack">Mongo</div>
                  <div className="tech-stack">Express</div>
                  <div className="tech-stack">React</div>
                  <div className="tech-stack">React Router</div>
                  <div className="tech-stack">NodeJS</div>
                  <div className="tech-stack">Stripe Payments</div>
                  <div className="tech-stack">SCSS</div>
              </div>
            </div>
          </div>
          <div className="journal-project">
            <div className="journal-header" onClick={journalToggle}>
              <h2>My Daily</h2>
              <h3>A daily journal.</h3>
            </div>
            <div className={openJournal ? "journal-body" : "hide-details"}>
              <hr/>
              <div className="project-links">
                <a href="https://react-daily-journal.herokuapp.com/" target="_blank"><button className="demo-button">DEMO</button></a>
                <a href="https://github.com/sandyddinh/daily-journal/blob/main/README.md" target="_blank"><button className="readme-button">README</button></a>
              </div>
              <div className="project-preview">
                <div className="project-image"><img src={journalMain}/></div>
                <div className="project-image"><img src={journalEntry}/></div>
                <div className="project-image"><img src={journalAbout}/></div>
              </div>
              <div className="technologies">
                {/* <p>Solutions Stack</p><br/> */}
                  <div className="tech-stack">Mongo</div>
                  <div className="tech-stack">Express</div>
                  <div className="tech-stack">React</div>
                  <div className="tech-stack">React Router</div>
                  <div className="tech-stack">NodeJS</div>
                  <div className="tech-stack">Third Party API</div>
                  <div className="tech-stack">SCSS</div>
              </div>
            </div> 
          </div>
          <div className="rewind-project">
            <div className="rewind-header" onClick={rewindToggle}>
              <h2>2020 In Rewind</h2>
              <h3>A trivia game inspired by Family Feud.</h3>
            </div>
            <div className={openRewind ? "rewind-body" : "hide-details"}>
              <hr/>
              <div className="project-links">
                <a href="https://sandyddinh.github.io/README/" target="_blank"><button className="demo-button">DEMO</button></a>
                <a href="https://github.com/sandyddinh/2020-in-rewind/blob/main/README.md" target="_blank"><button className="readme-button">README</button></a>
              </div>
              <div className="project-preview">
                <div className="project-image"><img src={rewindIntro}/></div>
                <div className="project-image"><img src={rewindBoard}/></div>
                <div className="project-image"><img src={rewindHelp}/></div>
              </div>
              <div className="technologies">
                {/* <p>Solutions Stack</p><br/> */}
                  <div className="tech-stack">JS</div>
                  <div className="tech-stack">HTML</div>
                  <div className="tech-stack">CSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
