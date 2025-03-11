import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import my_image from '../assets/images/my_image.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/user-attachments/assets/b30c3203-8569-4384-9322-fa4e2408fe9c" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Daketey" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/somya-mahapatra/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ritul.mahapatra@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Somya Mahapatra</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Daketey" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/somya-mahapatra/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ritul.mahapatra@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;