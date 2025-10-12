import { useState } from "react";
import "./Certifications.css";
import Loader from "../Loader/Loader";

const certs = [
  {
    href: "https://softuni.bg/Certificates/Details/109721/c725d72f",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/109721?code=c725d72f",
  },
  {
    href: "https://softuni.bg/Certificates/Details/119820/68333be5",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/119820?code=68333be5",
  },
  {
    href: "https://softuni.bg/Certificates/Details/126608/a0dd5db5",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/126608?code=a0dd5db5",
  },
  {
    href: "https://softuni.bg/Certificates/Details/130476/b08afab8",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/130476?code=b08afab8",
  },
  {
    href: "https://softuni.bg/Certificates/Details/162790/7287b188",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/162790?code=7287b188",
  },
  {
    href: "https://softuni.bg/Certificates/Details/168676/dea30983",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/168676?code=dea30983",
  },
  {
    href: "https://softuni.bg/Certificates/Details/211850/f2d0e948",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/211850?code=f2d0e948",
  },
  {
    href: "https://softuni.bg/Certificates/Details/205573/822c82cd",
    imgSrc:
      "https://softuni.bg/certificates/certificates/converttoimage/205573?code=822c82cd",
  },
];

const Certifications = () => {
  const [loadingArr, setLoadingArr] = useState(Array(certs.length).fill(true));

  const handleImgLoad = (index) => {
    setLoadingArr((arr) => {
      const updatedArr = [...arr];
      updatedArr[index] = false;
      return updatedArr;
    });
  };

  const anyLoading = loadingArr.some(Boolean);

  return (
    <section className="certifications-section">
      <h1 className="geist">Certifications</h1>

      {anyLoading && <Loader loadText={"Retreiving from SoftUni"} />}

      <div
        className="certifications-container"
        style={{ display: anyLoading ? "none" : "grid" }}
      >
        {certs.map((cert, index) => (
          <a
            key={cert.href}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cert.imgSrc}
              alt="certification"
              onLoad={() => handleImgLoad(index)}
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
