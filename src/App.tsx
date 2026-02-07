import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    return (
    <div className="main-container">
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
    </div>
    );
}

export default App;