import { useState } from "react";
import "./SpoilerBlock.css";

const SpoilerBlock = ({ text }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="spoiler-container geist">
      <h1>Demo Account:</h1>
      <div className="info-container">
        {revealed ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="0.9em"
            width="0.9em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="0.9em"
            width="0.9em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}

        <div
          className={` spoiler-block${revealed ? " revealed" : ""}`}
          onClick={() => setRevealed(!revealed)}
          tabIndex={0}
          style={{ cursor: "pointer" }}
        >
          {revealed ? text : "|"}
        </div>
      </div>
    </div>
  );
};

export default SpoilerBlock;
