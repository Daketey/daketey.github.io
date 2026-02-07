import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Expertise.scss';

const services = [
    {
        id: 'platform-eng',
        name: 'platform-engineering',
        pid: '1337',
        mem: '872KB',
        time: '2y4m',
        description: 'I have worked on deployment of Terraform Enterprise, creation of NIST/CIS compliant VM and Container images, policy enforcement for SDDC migration and Oracle DB creation setup automation setup for virtual machines.',
        modules: [
            "Terrafrom", "Packer", "Ansible", "Docker", "VMware", 
            "AWS", "Azure", "OCI", "Sentinel"
        ]
    },
    {
        id: 'devsecops',
        name: 'devsecops-pipeline',
        pid: '2048',
        mem: '684KB',
        time: '1y8m',
        description: 'I worked on creating Devops pipeline from scratch for build and deployment of applications, I also enforced security standards into these pipelines to ensure we are mitigating any known threat or risks.',
        modules: [
            "Git", "GitHub Actions", "Harness", "BASH", "Trivy", 
            "Blackduck", "Veracode", "Hashicorp Vault"
        ]
    },
    {
        id: 'fullstack',
        name: 'fullstack-dev',
        pid: '4096',
        mem: '928KB',
        time: '3y1m',
        description: 'I have worked on several fullstack projects and middleware integrations, this includes setting up microservices, creating middlewares, frontend development and backend api development.',
        modules: [
            "React", "Node.js", "Apache Kafka", "Python"
        ]
    }
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="expertise-background">
        <div className="terminal-monitor">
            <div className="monitor-wrapper">
            <div className="terminal-header-bar">
                <div className="header-left">
                    <span className="header-icon">●</span>
                    <span className="header-title">PROCESS MONITOR v2.4.1</span>
                </div>
                <div className="header-right glitch" data-text="[RUNTIME ANALYSIS]">[RUNTIME ANALYSIS]</div>
            </div>
            
            <div className="terminal-content">
                {services.map((service, index) => (
                    <div className="service-process" key={service.id} data-index={index}>
                        <div className="process-header">
                            <div className="process-line">
                                <span className="field-pid">
                                    <span className="field-label">PID:</span>
                                    <span className="field-value">{service.pid}</span>
                                </span>
                                <span className="field-separator">│</span>
                                <span className="field-name">
                                    <span className="field-label">NAME:</span>
                                    <span className="field-value">{service.name}</span>
                                </span>
                                <span className="field-separator">│</span>
                                <span className="field-time">
                                    <span className="field-label">TIME:</span>
                                    <span className="field-value">{service.time}</span>
                                </span>
                                <span className="field-separator">│</span>
                                <span className="field-mem">
                                    <span className="field-label">MEM:</span>
                                    <span className="field-value">{service.mem}</span>
                                </span>
                                <span className="field-separator">│</span>
                                <span className="field-status">
                                    <span className="field-label">STATUS:</span>
                                    <span className="status-running glitch" data-text="RUNNING">RUNNING</span>
                                </span>
                            </div>
                        </div>
                        
                        <div className="process-body">
                            <div className="process-desc">
                                <span className="desc-label glitch" data-text=">>">»</span>
                                <span className="desc-text">{service.description}</span>
                            </div>
                            
                            <div className="process-modules">
                                <span className="modules-label glitch" data-text=">>">»</span>
                                <div className="modules-tags">
                                    {service.modules.map((module, idx) => (
                                        <span 
                                            className={`module-tag module-${idx % 4}`} 
                                            key={idx}
                                        >
                                            [{module}]
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="terminal-footer-bar">
                <span className="footer-info">3 processes active</span>
                <span className="footer-separator">|</span>
                <span className="footer-info">System: OPERATIONAL</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Expertise;