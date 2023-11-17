import { Button } from "..";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero mt-5 pt-5 bg" id="hero">
      <div className="container-st py-5">
        <div className="row align-items-end g-4 g-md-5">
          <div className="col-12 col-md-9 col-md-7 mb-5 mx-auto text-center">
            <h1>
              Stormtropper NFT<span></span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="mb-4 mb-md-5">
              <Button label="Connect Wallet" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
