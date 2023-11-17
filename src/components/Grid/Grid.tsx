import oneImg from "../../assets/images/hero.png";
import twoImg from "../../assets/images/one.jpg";
import threeImg from "../../assets/images/two.jpg";

import "./Grid.css";

const Grid = () => {
  return (
    <section className="grid py-5 px-4" id="grid">
      <div className="container-st">
        <div className="floating-container position-relative">
          <div className="row align-items-center g-4 g-sm-5">
            <div className="col">
              <img src={oneImg} alt="one" />
            </div>
            <div className="col">
              <img src={twoImg} alt="one" />
            </div>
            <div className="col">
              <img src={threeImg} alt="one" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
