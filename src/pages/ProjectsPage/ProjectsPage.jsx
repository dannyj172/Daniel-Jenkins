import "./ProjectsPage.css";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SpoilerBlock from "../../components/SpoilerBlock/SpoilerBlock";
import InfoPopup from "../../components/InfoPopup/InfoPopup";
import Loader from "../../components/Loader/Loader";

const sectionIds = [
  "discuss",
  "sneakerthrift",
  "chatty",
  "foodmine",
  "zentry",
  "homyz",
  "movie",
];

const ProjectsPage = () => {
  const [activeSection, setActiveSection] = useState("discuss");
  const lastActiveRef = useRef(activeSection);
  const [loadedImgs, setLoadedImgs] = useState(0);
  const [shouldScroll] = useSearchParams();

  const allImgsLoaded = loadedImgs >= 17;
  const handleImgLoad = () => {
    setLoadedImgs((prev) => prev + 1);
  };

  const sectionRefs = useRef({});

  const throttle = (fn, waitTime) => {
    let lastTime = 0;
    return (...event) => {
      const now = Date.now();
      if (now - lastTime >= waitTime) {
        fn(...event);
        lastTime = now;
      }
    };
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const scroll = shouldScroll.get("scroll");
    if (scroll && sectionIds.includes(scroll)) {
      const scrollToProject = document.getElementById(scroll);
      if (scrollToProject) {
        scrollToProject.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [shouldScroll]);

  useEffect(() => {
    sectionIds.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const handleScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = sectionRefs.current[id];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (id === "movie") {
            if (rect.bottom <= 1100) {
              current = id;
            }
          } else if (rect.top <= 450) {
            current = id;
          }
        }
      }
      if (current !== lastActiveRef.current) {
        setActiveSection(current);
        lastActiveRef.current = current;
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 50);

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
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
    <div className="projects-page">
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
        <nav className="projects-nav">
          <h1 className="geist">Currently Viewing</h1>
          <ul>
            <h2 className="geist">
              <span>―</span> Personal Projects
            </h2>
            <li
              onClick={() => scrollToSection("discuss")}
              className={activeSection === "discuss" ? "active" : ""}
            >
              Discuss
            </li>
            <li
              onClick={() => scrollToSection("sneakerthrift")}
              className={activeSection === "sneakerthrift" ? "active" : ""}
            >
              SneakerThrift
            </li>

            <h2 className="geist">
              <span>―</span> Study Projects
            </h2>

            <li
              onClick={() => scrollToSection("chatty")}
              className={activeSection === "chatty" ? "active" : ""}
            >
              Chatty
            </li>
            <li
              onClick={() => scrollToSection("foodmine")}
              className={activeSection === "foodmine" ? "active" : ""}
            >
              Foodmine
            </li>
            <li
              onClick={() => scrollToSection("zentry")}
              className={activeSection === "zentry" ? "active" : ""}
            >
              Zentry
            </li>
            <li
              onClick={() => scrollToSection("homyz")}
              className={activeSection === "homyz" ? "active" : ""}
            >
              Homyz
            </li>
            <li
              onClick={() => scrollToSection("movie")}
              className={activeSection === "movie" ? "active" : ""}
            >
              Movie Viewer
            </li>
          </ul>
        </nav>
      </div>
      <div className="projects">
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
        <h1 className="projects-heading">Projects</h1>
        <h2 className="geist projects-underheading">Personal Projects</h2>
        <SpoilerBlock text="email: john@gmail.com, username: john, password: 123123" />
        {/* SHOE SITE */}
        <ProjectCard
          name={"Discuss"}
          authicon
          tags={["Angular", "Typescript", "MongoDB", "Express"]}
          features={[
            "Authorization",
            "Create, Edit and View Posts",
            "Search",
            "Create and View Comments",
            "View Discussion Topics",
            "Voting",
            "Profile Page",
            "Smart Redirect with Query Params",
            "Visit History",
            "Sorting",
            "Confirmations",
            "Popups",
            "Modern UI",
            "Quality UX",
            "Responsive Design",
            "Error Handling",
          ]}
          mainImg={"./discuss1.webp"}
          mobileImg={"./discuss-mobile1.webp"}
          bottomImg1={"./discuss-post.webp"}
          bottomImg2={"./discuss-create2.webp"}
          description={`Discuss is a Full-Stack Forum website inspired by and a simplified clone of Reddit. It has all
            of Reddit's basic features, such as creating posts, voting, commenting and more.`}
          date={"Dec 28, 2024"}
          url={"discuss-u0ac.onrender.com"}
          id={"discuss"}
          handleImgLoad={handleImgLoad}
        />
        <ProjectCard
          name={"SneakerThrift"}
          tags={["Angular", "React", "Javascript"]}
          features={[
            "Modern UI",
            "Quality UX",
            "View, Create and Edit Listings",
            "View own Listings",
            "Sort Listings",
            "Authorization",
            "Comment",
            "Error Handling",
          ]}
          mainImg={"./sneakerthrift1.webp"}
          bottomImg1={"./sneakerthrift2.webp"}
          bottomImg2={"./sneakerthrift3.webp"}
          description={`SneakerThrift is a shoe reselling concept website I designed and created for my Softuni React Exam. I have recreated the website with Angular aswell.`}
          id={"sneakerthrift"}
          handleImgLoad={handleImgLoad}
        />
        <div className="flex">
          <h2 className="geist projects-underheading-two">Study Projects</h2>
          <InfoPopup></InfoPopup>
        </div>
        <ProjectCard
          name={"Chatty"}
          tags={[
            "React",
            "Javascript",
            "Tailwind",
            "MongoDB",
            "Express",
            "Socket.io",
            "Cloudinary",
          ]}
          features={[
            "Authorization",
            "Real-time Chat",
            "Chat Image Upload",
            "Online Status Check",
            "Zustand State Management",
            "DaisyUI",
            "Profile Page",
            "Profile Picture Upload and Update",
            "Lucide Components",
            "Modern UI",
            "Quality UX",
            "Responsive Design",
            "Error Handling",
            "Loading Skeletons",
            "Theme Switching",
          ]}
          mainImg={"./chatty1.webp"}
          mobileImg={"./chatty-mobile.webp"}
          bottomImg1={"./chatty2.webp"}
          bottomImg2={"./chatty3.webp"}
          description={`Chatty is a Full-Stack messaging app. Utilizing Socket.io for real-time communication it allows users to chat, create an account, select and upload a profile picture, view which users are currently online and select any of daisyUI's beautiful colour scheme options.`}
          date={"May 08, 2025"}
          url={"chatty-u1zk.onrender.com"}
          id={"chatty"}
          handleImgLoad={handleImgLoad}
        />
        <ProjectCard
          name={"Foodmine"}
          tags={["Angular", "Typescript", "MongoDB", "Express"]}
          features={[
            "Authorization",
            "Error Handling",
            "Orders",
            "Cart",
            "Payment integration",
            "Leaflet",
            "RXJS",
            "JWT",
          ]}
          mainImg={"./foodmine1.webp"}
          mobileImg={"./foodmine-mobile.webp"}
          bottomImg1={"./foodmine3.webp"}
          bottomImg2={"./foodmine5.webp"}
          description={`Foodmine is a Full-Stack food ordering website. It features user authentication, a dynamic map to select your delivery location and an order placement system.`}
          date={"May 03, 2024"}
          url={"food-store-angular.onrender.com"}
          id={"foodmine"}
          handleImgLoad={handleImgLoad}
        />
        <ProjectCard
          name={"Zentry"}
          url={"zentry-s2hm.onrender.com"}
          tags={["React", "Javascript", "GSAP Animations"]}
          features={[
            "Desktop only",
            "Modern UI",
            "Quality UX",
            "Award winning GSAP Animations",
          ]}
          gifUrl={"./zentry.webm"}
          gifOne={"./zentry-video1.webm"}
          gifTwo={"./zentry-video2.webm"}
          description={`Zentry is a clone of the award-winning website by Active Theory. It features some of the most impressive animations and creative showcase I've seen, so I followed a guide to learn how to make them myself.`}
          date={"Feb 02, 2025"}
          id={"zentry"}
          handleImgLoad={handleImgLoad}
        />
        <ProjectCard
          name={"Homyz Real Estate"}
          tags={[
            "React",
            "Javascript",
            "MongoDB",
            "Express",
            "Cloudinary",
            "Auth0",
          ]}
          features={[
            "Authorization",
            "Login with Google",
            "Create and View Properties",
            "Image Upload",
            "Booking",
            "Search",
            "Favourites",
            "Smart Leaflet Input",
            "Modern UI",
            "Quality UX",
            "Responsive Design",
            "Error Handling",
            "Swiper",
            "MantineUI",
            "Axios",
            "DayJS",
            "Leaflet Map",
          ]}
          mainImg={"./realestate1.webp"}
          mobileImg={"./realestate-mobile.webp"}
          bottomImg1={"./realestate2.webp"}
          bottomImg2={"./realestate3.webp"}
          description={`Homyz is a Full-Stack Real-Estate Booking website. Create your own property listings, book visits, favourite properties and more. This app uses Auth0 for authentication, Cloudinary for image uploads and leaflet for a dynamic map.`}
          id={"homyz"}
          handleImgLoad={handleImgLoad}
        />
        <ProjectCard
          name={"Movie Viewer"}
          tags={["React", "Javascript", "Appwrite"]}
          features={[
            "Modern UI",
            "Quality UX",
            "Responsive Design",
            "View Movie Details",
            "Search",
            "External API Integration",
            "TMDB For Live Movie Data",
            "Appwrite Algorithm for Search Popularity",
          ]}
          mainImg={"./movie-viewer1.webp"}
          mobileImg={"./movie-viewer-mobile.webp"}
          bottomImg1={"./movie-viewer2.webp"}
          bottomImg2={"./movie-viewer3.webp"}
          description={`This app is a movie details viewer that uses The Movie Database (TMDB) API to fetch live movie data. It also uses Appwrite's database to store search popularity data and display what's trending.`}
          id={"movie"}
          handleImgLoad={handleImgLoad}
        />
        {/* Showcase 1 picture + app name for less important apps */}
      </div>
    </div>
  );
};

export default ProjectsPage;
