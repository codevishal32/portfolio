import Cs from "../../../assests/Logos/icons8-c-sharp-logo.svg";
import js from "../../../assests/Logos/icons8-js.svg";
import nodeJs from "../../../assests/Logos/icons8-nodejs.svg";
import C from "../../../assests/Logos/c++.svg";
import python from "../../../assests/Logos/python.svg";
import html from "../../../assests/Logos/html.svg";
import css from "../../../assests/Logos/css.svg";
import react from "../../../assests/Logos/react-logo-svgrepo-com.svg";
import mongoDb from "../../../assests/Logos/mongodb.svg";
import mySql from "../../../assests/Logos/mysql.svg";
import firebase from "../../../assests/Logos/firebase.svg";
import flask from "../../../assests/Logos/icons8-flask.svg";
import git from "../../../assests/Logos/git.svg";
import asp from "../../../assests/Logos/1796943.jpg";

const skillData = [
  {
    title: "Programming Language",
    logos: [
      { src: C, name: "C++" },
      { src: Cs, name: "C#" },
      { src: js, name: "JavaScript" },
      { src: python, name: "Python" }
    ]
  },
  {
    title: "Frontend",
    logos: [
      { src: html, name: "HTML" },
      { src: css, name: "CSS" },
      { src: react, name: "React" }
    ]
  },
  {
    title: "Backend",
    logos: [
      { src: flask, name: "Flask" },
      { src: nodeJs, name: "Node.js" },
      { src: asp, name: "ASP.NET" }
    ]
  },
  {
    title: "DataBase & Clouds",
    logos: [
      { src: mongoDb, name: "MongoDB" },
      { src: mySql, name: "MySQL" },
      { src: firebase, name: "Firebase" },
      { src: git, name: "GitHub" }
    ]
  }
];

export default skillData;
