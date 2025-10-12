import "./Loader.css";

const Loader = ({ loadText, fixed }) => {
  const style = fixed
    ? {
        position: "fixed",
        width: "100%",
        height: "2px",
        zIndex: 9999,
      }
    : {};
  return (
    <div className="loader-container" style={style}>
      {loadText && <h1 className="geist">{loadText}</h1>}
      <div className="progress"></div>
    </div>
  );
};

export default Loader;
