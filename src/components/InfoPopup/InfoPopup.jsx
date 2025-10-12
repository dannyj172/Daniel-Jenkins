import "./InfoPopup.css";

const InfoPopup = () => {
  return (
    <div className="popup-container">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"></path>
        <circle cx="8" cy="4.5" r="1"></circle>
      </svg>
      <div className="popup-content">
        <p className="popup-text geist">
          These are projects that I have created by following guides and
          tutorials to learn new skills and technologies
        </p>
      </div>
    </div>
  );
};

export default InfoPopup;
