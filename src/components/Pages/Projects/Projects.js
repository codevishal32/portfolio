import Button from "../buttons/Button";
import Titles from "../Titles/Titles";
import TypewriterText from "../TypeWriter/TypewriterText";
import AkashwaniCard from "./Akashwani-Card/AkashwaniCard";
import Mlcard from "./Ml-Card/Mlcard";
import UICard from "./UI-Card/UICard";
import "./Projects.styles.css";

const Projects = () => {
  return (
    <div className="Project">
      <Titles 
        heading={"Projects"} 
        description={"Here are some of my recent projects. Each project represents a unique challenge and showcases different skills and technologies."}
      />
      
      <div className="project-container">

        <div className="project-container-section">
          {/* Deepfake Project */}
          <div className="project-box deepfake-box">
            <div className="project-showcase">
              <div className="project-left left-adjust"></div>

              <div className="project-mid mid-adjust mid-setting">
                <div className="project-mid-heading">
                  <h4>Deepfake</h4>
                  <Button text={"Source"} link={"https://www.youtube.com/watch?v=WN6Y-F983l8"} />
                </div>
                <TypewriterText class={"textAdjustTypeWriter"} message={"Click. Detect. Done"} />
              </div>

              <div className="project-right right-adjust"></div>
            </div>

            <div className="project-bottom text">
              <h3>Real-time deepfake detection</h3>
              <p>Protecting your content, identity, and truth—instantly.</p>
            </div>
          </div>

          {/* Stylish Card Project */}
          <div className="project-box box-file">
            <div className="stylish-card">
              <div className="fade-text">
                I'll modify the rotation animation to make it slower. We'll increase the duration of the animation to achieve this effect.
              </div>

              <div className="code-box">
                <span className="label">🔁 Motion Example: Rotate</span>
                <span className="version-tag">v2</span>
              </div>

              <div className="fade-text">
                I'll modify the rotation animation to make it slower. We'll increase the duration of the animation to achieve this effect.
              </div>

              <button className="rotate-btn">
                Rotate the square slower <span className="arrow">↑</span>
              </button>
            </div>

            <div className="footer-text">
              <strong>AI-powered editing</strong><br />
              Open examples in Vercel's v0 AI editor and tweak as needed.
            </div>
          </div>
        </div>

        <div className="project-container-section-second">
          {/* Other Cards */}
          <div className="project-box"><Mlcard /></div>
          <div className="project-box"><AkashwaniCard /></div>
          <div className="project-box"><UICard /></div>
        </div>

      </div>

      <Button text={"All Projects"} link={"#/home"} />
    </div>
  );
};

export default Projects;
