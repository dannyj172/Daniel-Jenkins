import "./ProjectList.css";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <div className="projects-container">
      <div className="heading-container">
        <h1 className="geist">Projects</h1>

        <sup>
          <Link to="/projects" className="projects-link">
            view
          </Link>
        </sup>
      </div>

      <ul>
        <li>
          <div className="img-container">
            <Link to="/projects?scroll=discuss">
              <img src="discuss1.webp" alt="discuss" />
            </Link>
          </div>
          <div className="project-info">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discuss-u0ac.onrender.com/"
              className="project-link"
            >
              discuss-u0ac.onrender.com
            </a>
            <div className="dashed-line" />
            <h1 className="project-date">Dec 28, 2024</h1>
          </div>
        </li>
        <li>
          <div className="img-container">
            <Link to="/projects?scroll=chatty">
              <img src="chatty1.webp" alt="discuss" />
            </Link>
          </div>
          <div className="project-info">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://chatty-u1zk.onrender.com/"
              className="project-link"
            >
              chatty-u1zk.onrender.com
            </a>
            <div className="dashed-line" />
            <h1 className="project-date">May 08, 2025</h1>
          </div>
        </li>
        <li>
          <div className="img-container">
            <Link to="/projects?scroll=foodmine">
              <img src="foodmine1.webp" alt="discuss" />
            </Link>
          </div>
          <div className="project-info">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://food-store-angular.onrender.com/"
              className="project-link"
            >
              food-store-angular.onrender.com
            </a>
            <div className="dashed-line" />
            <h1 className="project-date">May 03, 2024</h1>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectList;
