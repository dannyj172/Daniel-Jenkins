import "./HomePage.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import ProjectList from "../../components/ProjectList/ProjectList";
import TechStack from "../../components/TechStack/TechStack";
import Certifications from "../../components/Certifications/Certifications";
import Footer from "../../components/Footer/Footer";
import FloatingButtons from "../../components/FloatingButtons/FloatingButtons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <div className="home-container">
        <aside className="home-left">
          <h1 className="screenshots-sidenote">
            A few screenshots from some <br /> of my personal work.
          </h1>
        </aside>
        <main className="home-middle">
          <Header />
          <About />
          <ProjectList />
          <TechStack />
          <Certifications />
          <Footer />
        </main>
        <aside className="home-right">
          <blockquote className="about-sidenote">
            Are you interested in learning more <br />{" "}
            <Link to="/about" className="about-link">
              about me
            </Link>
            ?
          </blockquote>
          <h1 className="certifications-sidenote">
            Certifications i have acquired from SoftUni <br /> after completing
            the JavaScript Developer path.
          </h1>
        </aside>
      </div>
      <FloatingButtons />
    </div>
  );
};

export default HomePage;
