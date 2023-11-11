import { QuoteLeft, QuoteRight } from "../../icons";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="introduction py-5" id="intro">
      <div className="container-st my-5">
        <div className="row">
          <div className="col-12 col-md-9 mx-auto">
            <div className="px-3">
              <div className="header-block mb-3">
                <hr />
                <h2>Introduction</h2>
              </div>
              <div className="position-relative">
                <QuoteLeft />
                <p>
                  In the realm of NFTs, where digital collectibles reign
                  supreme, Stormtrooper NFT emerges as a beacon of hope and
                  charity. Inspired by the iconic Star Wars stormtrooper
                  military division, this project transcends the boundaries of
                  mere digital art to become a force for good, channeling its
                  resources towards noble causes that make a tangible impact on
                  the world.
                </p>
                <QuoteRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
