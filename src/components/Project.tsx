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

function Project() {
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
                    <span className="info-count">3 items found</span>
                </div>
                <div className="project-file">
                    <div className="file-header">
                        <span className="file-icon">►</span>
                        <span className="file-name">machine_learning_lottery.py</span>
                        <span className="file-size">3.2MB</span>
                    </div>
                    <div className="file-content">
                        <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
                            <h2 className="file-title">Not all Lotteries are made Equal</h2>
                        </a>
                        <p className="file-description">
                            <span className="desc-prefix">#</span> This machine learning project aimed to investigate the relation between machine learning model size and ease of finding sparse sub networks through Ticker search algorithm.
                        </p>
                    </div>
                </div>
                <div className="project-file">
                    <div className="file-header">
                        <span className="file-icon">►</span>
                        <span className="file-name">azure_az900_cert.md</span>
                        <span className="file-size">128KB</span>
                    </div>
                    <div className="file-content">
                        <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer">
                            <h2 className="file-title">AZ-900</h2>
                        </a>
                        <p className="file-description">
                            <span className="desc-prefix">#</span> Certified in Azure Fundamentals AZ-900.
                        </p>
                    </div>
                </div>
                <div className="project-file">
                    <div className="file-header">
                        <span className="file-icon">►</span>
                        <span className="file-name">oracle_1Z0_cert.md</span>
                        <span className="file-size">156KB</span>
                    </div>
                    <div className="file-content">
                        <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer">
                            <h2 className="file-title">1Z0-1085-24</h2>
                        </a>
                        <p className="file-description">
                            <span className="desc-prefix">#</span> Oracle Cloud Infrastructure certified Foundations Associate.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Project;