import "./AboutPage.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";

const sectionIds = ["about", "development", "info", "location", "colophon"];

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [loadedImgs, setLoadedImgs] = useState(0);

  const allImgsLoaded = loadedImgs >= 2;
  const handleImgLoad = () => {
    setLoadedImgs((prev) => prev + 1);
  };

  const sectionRefs = useRef({});
  useEffect(() => {
    window.scrollTo(0, 0);
    sectionIds.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const handleScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = sectionRefs.current[id];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (id === "colophon") {
            if (rect.bottom <= 880) {
              current = id;
            }
          } else if (rect.top <= 280) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionRefs.current = {};
    };
  }, []);

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="about-page">
      {!allImgsLoaded && <Loader fixed />}
      <div className="sidebar">
        <Link to="/" className="back-button geist">
          <div className="back-icon-container">
            <svg height="1em" width="1em" viewBox="0 0 24 24">
              <path
                d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
                fill="currentColor"
              />
            </svg>
          </div>
          Home
        </Link>
        <nav className="about-nav">
          <h1 className="geist">On This Page</h1>
          <ul>
            <li
              onClick={() => scrollToSection("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("development")}
              className={activeSection === "development" ? "active" : ""}
            >
              Development
            </li>
            <li
              onClick={() => scrollToSection("info")}
              className={activeSection === "info" ? "active" : ""}
            >
              Info
            </li>
            <li
              onClick={() => scrollToSection("location")}
              className={activeSection === "location" ? "active" : ""}
            >
              Location
            </li>
            <li
              onClick={() => scrollToSection("colophon")}
              className={activeSection === "colophon" ? "active" : ""}
            >
              Colophon
            </li>
          </ul>
        </nav>
      </div>
      <div className="about-content">
        <div id="about" className="about">
          <Link to="/" className="back-button geist mobile-only">
            <div className="back-icon-container">
              <svg height="1em" width="1em" viewBox="0 0 24 24">
                <path
                  d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            Home
          </Link>
          <h1 className="about-heading">About</h1>
          <h2 className="geist">Who made this website?</h2>
          <p>
            My name is Daniel. I'm a software engineer who builds websites and
            web applications.
          </p>

          <p className="mt">
            I have completed all of SoftUni's JavaScript Developer path courses
            and have further developed my ability to code through building
            projects, following tutorials and reading documentation.
          </p>
        </div>
        <div id="development" className="development">
          <h1>Development</h1>
          <p>
            A few years ago I started learning how to code in between working a
            part time job. I quickly figured out that web dev is something I
            enjoy, so I enrolled for SoftUni's courses. I have learnt front and
            back-end web development, databases and more.
          </p>
          <img
            src="collage.webp"
            alt="project-collage"
            className="about-image"
            onLoad={handleImgLoad}
          />
          <p>
            SoftUni's JS path concluded with <span>Angular</span>, so after
            completing it, I decided to further my understanding of that
            framework and build my own project with it before switching back to
            the more popular and my preferred framework <span>React</span>.
          </p>
        </div>
        <div id="info" className="info">
          <h1>Info</h1>
          {/* . code editor -- VS Code, browser, phone number, email, full name, preferred framework */}
          <p className="gray">Here's some information you might find useful.</p>
          <ul>
            <li>
              Showcase ―{" "}
              <Link to={"/projects"} className="about-link">
                Projects
              </Link>
            </li>
            <li>
              CV ―{" "}
              <a
                className="about-link"
                href="/Daniel-Jenkins-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>{" "}
              /{" "}
              <a
                className="about-link"
                href="/Daniel-Jenkins-CV.pdf"
                download={"Daniel-Jenkins-CV"}
              >
                Download
              </a>
            </li>
            <li>
              Github ―{" "}
              <a
                className="about-link"
                href="https://github.com/dannyj172"
                target="_blank"
                rel="noopener noreferrer"
              >
                dannyj172
              </a>
            </li>
            <li>Email ― dannyj172@gmail.com</li>
            <li>Full Name ― Daniel Jenkins</li>
            <li>Location ― Dobrich/Sofia</li>
            <li>
              Studied at ―{" "}
              <a
                className="about-link"
                href="https://softuni.bg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoftUni
              </a>
            </li>
            <li>Code Editor ― VS Code</li>
            <li>Design ― Figma</li>
          </ul>
        </div>
        <div id="location" className="location">
          <h1>Location</h1>
          <p>
            I currently reside in <span>Branishte/Dobrich</span>, but I can
            comfortably move to <span>Sofia</span> if necessary or work
            remotely.
          </p>
          <img
            src="dobrich.webp"
            alt="dobrich"
            className="about-image rounded-img"
            onLoad={handleImgLoad}
          />
        </div>
        <div id="colophon" className="colophon">
          <h1>Colophon</h1>
          <p>
            This website is jumpstarted with <span>Vite</span>, made interactive
            with <span>React</span>, styled with <span>CSS</span>, and hosted on{" "}
            <span>Render</span>. Typeset is <span>Geist</span> and{" "}
            <span>Source Serif 4</span>. All media used is optimized, images and
            videos are converted to <span>.webp and .webm</span> and compressed
            with various tools such as <span>Tinify</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
