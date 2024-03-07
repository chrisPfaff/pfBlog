import "../Styles/UnderConstruction.scss";

import underConstructon from "../assets/webpageconstruction.gif";

const UnderConstruction = () => {
  return (
    <div className="card-holder">
      <div className="card">
        <h1>Under Construction</h1>
        <img src={underConstructon} alt="Under Construction" />
      </div>
    </div>
  );
};

export default UnderConstruction;
