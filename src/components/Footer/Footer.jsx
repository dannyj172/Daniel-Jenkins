import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="dashed-line" />
      <h1>
        <a href="/examplecv.png" download={"example-cv"}>
          Click here
        </a>{" "}
        to download my <span>CV</span>, or simply view it by{" "}
        <a href="/examplecv.png" target="_blank" rel="noopener noreferrer">
          clicking here
        </a>
        .
      </h1>
      <div className="dashed-line" />
    </footer>
  );
};

export default Footer;
