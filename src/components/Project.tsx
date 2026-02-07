import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import config from '../config/portfolio.json';

function Project() {
    const projects = config.projects;
    
    return(
    <div className="projects-container" id="projects">
        <div className="repo-background">
        <div className="repo-browser">
            <div className="repo-wrapper">
            <div className="repo-header">
                <div className="header-left">
                    <span className="header-icon">■</span>
                    <span className="header-title">/projects/portfolio</span>
                </div>
                <div className="header-right glitch" data-text="[REPOSITORY BROWSER]">[REPOSITORY BROWSER]</div>
            </div>
            
            <div className="repo-content">
                <div className="repo-info">
                    <span className="info-text">$ ls -la projects/</span>
                    <span className="info-count">{projects.length} items found</span>
                </div>
                {projects.map((project, index) => (
                    <div className="project-file" key={index}>
                        <div className="file-header">
                            <span className="file-icon">►</span>
                            <span className="file-name">{project.fileName}</span>
                            <span className="file-size">{project.fileSize}</span>
                        </div>
                        <div className="file-content">
                            <a href={project.url} target="_blank" rel="noreferrer">
                                <h2 className="file-title">{project.title}</h2>
                            </a>
                            <p className="file-description">
                                <span className="desc-prefix">#</span> {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Project;