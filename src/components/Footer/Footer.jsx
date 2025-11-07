import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="dashed-line" />
      <h1>
        <a href="/Daniel-Jenkins-CV.pdf" download={"Daniel-Jenkins-CV"}>
          Click here
        </a>{" "}
        to download my <span>CV</span>, or simply view it by{" "}
        <a
          href="/Daniel-Jenkins-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          clicking here
        </a>
        .
      </h1>
      <div className="dashed-line" />
    </footer>
  );
};

export default Footer;
