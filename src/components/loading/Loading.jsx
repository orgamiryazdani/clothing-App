import "./Loading.css";

const Loading = () => {
  return <div className="body">
    <div className="loading">
      <div className="spin-loading"></div>
      <div className="dot-loading">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
    </div>
  </div>
};

export default Loading;
