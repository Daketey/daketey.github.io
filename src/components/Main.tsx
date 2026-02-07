import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../assets/styles/Main.scss';
import config from '../config/portfolio.json';
import asciiArt from '../assets/ascii-art.txt?raw';

function Main() {
  const { personal, social } = config;

  const iconComponents: { [key: string]: any } = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    medium: ArticleIcon,
    email: EmailIcon
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="ascii-art-wrapper">
          <pre className="ascii-art">{asciiArt}</pre>
        </div>
        <div className="content">
          <div className="social_icons">
            {social.map((item) => {
              const IconComponent = iconComponents[item.name];
              return (
                <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
                  <span className="icon-label">{item.label}</span>
                  <IconComponent/>
                </a>
              );
            })}
          </div>
          <h1 data-text={personal.name}>{personal.name}</h1>
          <p>{personal.title}</p>

          <div className="mobile_social_icons">
            {social.map((item) => {
              const IconComponent = iconComponents[item.name];
              return (
                <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
                  <span className="icon-label">{item.label}</span>
                  <IconComponent/>
                </a>
              );
            })}
          </div>
        </div>
        <div className="scroll-indicator">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Main;