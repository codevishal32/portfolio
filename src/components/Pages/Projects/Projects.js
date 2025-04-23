
import Button from "../buttons/Button";
import TypewriterText from "../TypeWriter/TypewriterText";
import Mlcard from "./Ml-Card/Mlcard";
import "./Projects.styles.css"; // optional for extra styling

const Projects = () => {
  return (
    <div className="Project">
      <div className="project-header">
          <h2> Projects</h2>
          <p>Showcasing of Projects</p>
      </div>
      <div className="project-container">
          <div className="project-container-section">
            <div className="project-box">
                <div className="project-showcase">
                  <div className="project-left left-adjust">
                    
                  </div>
                  <div className="project-mid mid-adjust mid-setting">
                    <div className="project-mid-heading">
                      <h4>Deepfake</h4>
                      <Button text={"source"} link={"https://www.youtube.com/watch?v=WN6Y-F983l8"}/>
                    </div>
                      <TypewriterText class={"textAdjustTypeWriter"} message={"Click. Detect. Done"} /> 
                  </div>
                  <div className="project-right right-adjust">
                  </div>
                </div>
                <div className="project-bottom text">
                  <h3>Real-time deepfake detection</h3>
                  <p>Protecting your content, identity, and truth—instantly.</p>
                </div>
              
            </div>
            <div className="project-box ">
              <div className="stylish-card ">
                <div className="fade-text">
                    I'll modify the rotation animation to make it slower. We'll increase the
                    duration of the animation to achieve this effect.I'll modify the rotation animation to make it slower. We'll increase the
                    duration of the animation to achieve this effect.
                </div>

                <div className="code-box">
                  <span className="label">🔁 Motion Example: Rotate</span>
                  <span className="version-tag">v2</span>
                </div>
                <div className="fade-text">
                    I'll modify the rotation animation to make it slower. We'll increase the
                    duration of the animation to achieve this effect.
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
            <div className="project-box">
              <Mlcard />
            </div>
            <div className="project-box">
              <div className="project-containt"></div>
              <div className="project-bottom"></div>
            </div>
            <div className="project-box">
              <div className="project-containt"></div>
              <div className="project-bottom"></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
