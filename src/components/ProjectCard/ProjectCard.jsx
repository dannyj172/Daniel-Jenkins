import "./ProjectCard.css";

const ProjectCard = ({
  name,
  tags,
  features,
  mainImg,
  bottomImg1,
  bottomImg2,
  mobileImg,
  gifUrl,
  gifOne,
  gifTwo,
  description,
  date,
  url,
  id,
  handleImgLoad,
}) => {
  return (
    <div className="project-container" id={id}>
      <h1 className="geist">{name}</h1>

      <div className="project-details">
        <div className="left">
          <div className="tags">
            {tags?.map((tag, index) => (
              <p key={index} className={`tag ${tag.toLowerCase()} geist`}>
                {tag}
              </p>
            ))}
          </div>
          <div className="features">
            {features?.map((feature, index) => (
              <p key={index} className={`feature geist`}>
                {feature}
              </p>
            ))}
          </div>
          <p className="description geist">{description}</p>
        </div>
        <div className="right">
          {mainImg ? (
            <img
              className="project-image"
              src={mainImg}
              alt=""
              onLoad={handleImgLoad}
            />
          ) : (
            <video className="project-image" autoPlay loop muted>
              <source src={gifUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="bottom-images">
            {mobileImg && (
              <img
                className="mobile-image"
                src={mobileImg}
                alt=""
                onLoad={handleImgLoad}
              />
            )}
            <div
              className={`box-images ${!mobileImg ? "no-mobile-img-box" : ""}`}
            >
              {bottomImg1 ? (
                <img
                  className={`bottom-image ${
                    !mobileImg ? "no-mobile-img" : ""
                  }`}
                  src={bottomImg1}
                  alt=""
                  onLoad={handleImgLoad}
                />
              ) : (
                <video
                  className={`bottom-image ${
                    !mobileImg ? "no-mobile-img" : ""
                  }`}
                  autoPlay
                  loop
                  muted
                >
                  <source src={gifOne} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {bottomImg1 ? (
                <img
                  className={`bottom-image ${
                    !mobileImg ? "no-mobile-img" : ""
                  }`}
                  src={bottomImg2}
                  alt=""
                  onLoad={handleImgLoad}
                />
              ) : (
                <video
                  className={`bottom-image ${
                    !mobileImg ? "no-mobile-img" : ""
                  }`}
                  autoPlay
                  loop
                  muted
                >
                  <source src={gifTwo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
      {url ? (
        <div className="link-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://${url}/`}
            className="project-link"
          >
            {url}
          </a>
          <div className="dashed-line" />

          <h1 className="project-date">{date}</h1>
        </div>
      ) : (
        <div className="margin" />
      )}
    </div>
  );
};

export default ProjectCard;
