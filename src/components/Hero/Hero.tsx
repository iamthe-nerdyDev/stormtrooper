import { Button } from "..";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero mt-5 pt-5 bg" id="hero">
      <div className="container-st py-5">
        <div className="row align-items-end g-4 g-md-5">
          <div className="col-12 col-md-9 col-lg-10 mb-5 mx-auto text-center">
            <img className="hero-gif mb-5" src="/hero.gif" alt="hero" />
            <h1>
              Stormtropper NFT<span></span>
            </h1>
            <p>
              Creativity, Charity and Community. Stormtroopers, a charity at
              collection based on stars wars
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
