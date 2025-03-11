import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Terrafrom",
    "Packer",
    "Ansible",
    "Docker",
    "VMware",
    "AWS",
    "Azure",
    "Sentinel"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Harness",
    "BASH",
    "Trivy",
    "Blackduck",
    "Veracode"
];

const labelsThird = [
    "React",
    "Node.js",
    "Apache Kafka",
    "Python",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLayerGroup} size="3x"/>
                    <h3>Platform Engineering</h3>
                    <p>I have worked on deployment of Terraform Enterprise, creation of NIST/CIS compliant VM and Container images, policy enforcement for SDDC migration and Oracle DB creation setup automation setup for virtual machines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevSecOps</h3>
                    <p>I worked on creating Devops pipeline from scratch for build and deployment of applications, I also enforced security standards into these pipelines to ensure we are mitigating any known threat or risks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Fullstack Development</h3>
                    <p>I have worked on several fullstack projects and middleware integrations, this includes setting up microservices, creating middlewares, frontend development and backend api development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;