import { Button } from "..";
import heroImage from "../../assets/images/hero.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container-st">
        <div className="row align-items-end g-4 g-md-5">
          <div className="col-12 col-md-6">
            <h1>
              Stormtropper NFT<span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="mb-1 mb-md-5">
              <Button label="Connect Wallet" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={heroImage} alt="Stormtrooper Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
