import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Expertise.scss';
import config from '../config/portfolio.json';

const services = config.services;

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