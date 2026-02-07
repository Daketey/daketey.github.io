import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/Timeline.scss';

function Timeline() {
  const [terminalInput, setTerminalInput] = useState('');
  const jobs = [
    {
      company: 'State Street',
      title: 'Platform Engineer (Senior Associate)',
      location: 'Bengaluru, Karnataka',
      date: '2022 - present',
      desc: 'Working as part of the Infrastructure Automation team.',
      id: 'SS_2022'
    },
    {
      company: 'Maersk',
      title: 'Software Engineering Intern',
      location: 'Bengaluru, Karnataka',
      date: '2021 - 2022',
      desc: 'Worked as part of the CRM team as a Salesforce Developer.',
      id: 'MRS_2021'
    },
    {
      company: 'HighRadius',
      title: 'Software Engineering Intern',
      location: 'Bhubaneswar, Odisha',
      date: '2021 - 2021',
      desc: 'Full-stack Development, API Development, User Experience',
      id: 'HR_2021'
    }
  ];
  
  return (
    <div id="history">
      <div className="items-container terminal-career-section">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="header-left">
              <div className="terminal-controls">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <span className="header-title">career_history.log</span>
            </div>
            <div className="header-right glitch" data-text="[CAREER TIMELINE]">[CAREER TIMELINE]</div>
          </div>
        
        <div className="terminal-body">
          <div className="terminal-prompt">
            <span className="prompt-user">root@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~/career</span>
            <span className="prompt-symbol">$</span>
            <span className="prompt-command">cat career_history.log</span>
          </div>
          
          {jobs.map((job, i) => (
            <div className="terminal-entry" key={i} data-index={i}>
              <div className="entry-header">
                <span className="entry-timestamp">[{job.date}]</span>
                <span className="entry-status">STATUS: ACTIVE</span>
                <span className="entry-id">#{job.id}</span>
              </div>
              <div className="entry-line">
                <span className="line-label">COMPANY:</span>
                <span className="line-value company">{job.company}</span>
              </div>
              <div className="entry-line">
                <span className="line-label">ROLE:</span>
                <span className="line-value">{job.title}</span>
              </div>
              <div className="entry-line">
                <span className="line-label">LOCATION:</span>
                <span className="line-value location">{job.location}</span>
              </div>
              <div className="entry-line">
                <span className="line-label">DESCRIPTION:</span>
                <span className="line-value">{job.desc}</span>
              </div>
              <div className="entry-divider">{'─'.repeat(80)}</div>
            </div>
          ))}
          
          <div className="terminal-prompt terminal-cursor">
            <span className="prompt-user">root@portfolio</span>
            <span className="prompt-separator">:</span>
            <span className="prompt-path">~/career</span>
            <span className="prompt-symbol">$</span>
            <input 
              type="text" 
              className="terminal-input"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder=""
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;