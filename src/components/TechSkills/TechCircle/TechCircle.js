import React, { useEffect, useState } from 'react';
import './TechCircle.styles.css';
import Html5 from '../../../assests/TechCircle/html-BlhLRGzY.png';
import css from  '../../../assests/TechCircle/css-DlZE0Yf0.png';
import js from '../../../assests/TechCircle/js.png';
import react from '../../../assests/TechCircle/reactjs-LYxsbuPE.png';
import ts from '../../../assests/TechCircle/ts.png';
import node from '../../../assests/TechCircle/nodejs-BctxLIqp.png';
import mongo from '../../../assests/TechCircle/mongodb-DnU9EL9s.png';
import tailwind from '../../../assests/TechCircle/tailwind-CLR6e3yI.png';
import Gql from '../../../assests/TechCircle/web-CsEzzFaM.png';
import docker from '../../../assests/TechCircle/docker-DrQKSZ7f.png';
import mySql from '../../../assests/TechCircle/mysql-CZkond6c.png';
import git from '../../../assests/TechCircle/git.png';
import express from '../../../assests/TechCircle/expressJS-DsJf69aV.png';
import three from '../../../assests/TechCircle/three.svg';
import apache from '../../../assests/TechCircle/web-CsEzzFaM.png';
import bootstrap from '../../../assests/TechCircle/bootstrap-BNnCmPVD.png';
import nextjs from '../../../assests/TechCircle/nextjs-CI1LaBaQ.png';
import re from '../../../assests/TechCircle/timeScaledb-V7v2p_wP.png';
import www from '../../../assests/TechCircle/web-CsEzzFaM.png';
import c from '../../../assests/Logos/c++.svg';
import asp from '../../../assests/Logos/aspnet-svgrepo-com.svg';
import flask from '../../../assests/Logos/icons8-flask.svg';
const outerIcons = [
    { icon: react, name: "React" },
    { icon: node, name: "Node.js" },
    { icon: Html5, name: "HTML5" },
    { icon: css, name: "CSS3" },
    { icon: js, name: "JavaScript" },
    { icon: ts, name: "TypeScript" },
    { icon: nextjs, name: "Next.js" },
    { icon: git, name: "Git" },
    { icon: flask, name: "Flask" },
    { icon: asp, name: "Asp.Net Core" },
    { icon: c, name: "C++" },
    { icon: bootstrap, name: "Bootstrap" },
  ];
const innerIcons = [
    { icon: express, name: "Express" },
    { icon: mongo, name: "MongoDB" },
    { icon: tailwind, name: "Tailwind CSS" },
    { icon: docker, name: "Docker" },
    { icon: mySql, name: "Firebase" },
    { icon: three, name: "Three js" },
    
  ];
  
const TechCircle = () => {
    const [size, setSize] = useState(500);
    const [outerRadius, setOuterRadius] = useState(180);
    const [innerRadius, setInnerRadius] = useState(110);
  
    useEffect(() => {
      const updateSize = () => {
        const width = window.innerWidth;
        if (width < 480) {
          setSize(300);
          setOuterRadius(110);
          setInnerRadius(60);
        } else if (width < 768) {
          setSize(400);
          setOuterRadius(140);
          setInnerRadius(90);
        } else {
          setSize(500);
          setOuterRadius(180);
          setInnerRadius(110);
        }
      };
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);
  
    const centerX = size / 2;
    const centerY = size / 2;
  
    const calcCoords = (index, total, radius) => {
      const angle = (index / total) * 2 * Math.PI;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    };
  
    return (
      <div className="tech-circle-wrapper" style={{ width: size, height: size }}>
        <div className="rotating-circle">
          <svg className="svg-threads" width={size} height={size}>
            {/* Outer lines */}
            {outerIcons.map((_, i) => {
              const { x: x1, y: y1 } = calcCoords(i, outerIcons.length, outerRadius);
              const { x: x2, y: y2 } = calcCoords((i + 1) % outerIcons.length, outerIcons.length, outerRadius);
              return <line key={`outer-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} className="thread-line" />;
            })}
  
            {/* Inner lines */}
            {innerIcons.map((_, i) => {
              const { x: x1, y: y1 } = calcCoords(i, innerIcons.length, innerRadius);
              const { x: x2, y: y2 } = calcCoords((i + 1) % innerIcons.length, innerIcons.length, innerRadius);
              return <line key={`inner-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} className="thread-line" />;
            })}
          </svg>
  
          {/* Outer icons */}
          {outerIcons.map((item, index) => {
            const { x, y } = calcCoords(index, outerIcons.length, outerRadius);
            return (
              <div className="tech-icon" style={{ left: x, top: y }} key={`outer-icon-${index}`}>
                <img src={item.icon} alt={item.name} />
                <span className="tooltip">{item.name}</span>
              </div>
            );
          })}
  
          {/* Inner icons */}
          {innerIcons.map((item, index) => {
            const { x, y } = calcCoords(index, innerIcons.length, innerRadius);
            return (
              <div className="tech-icon inner" style={{ left: x, top: y }} key={`inner-icon-${index}`}>
                <img src={item.icon} alt={item.name} />
                <span className="tooltip">{item.name}</span>
              </div>
            );
          })}
  
          {/* Center icon */}
          <div className="center-icon">
            <img src={www} alt="Web" />
          </div>
        </div>
      </div>
    );
  };
  
  export default TechCircle;