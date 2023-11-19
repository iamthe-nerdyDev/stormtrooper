import callToJoinImage from "../../assets/images/join-us.png";
import { GitBook, Twitter } from "../../icons";
import "./CallToJoin.css";

const CallToJoin = () => {
  return (
    <section className="call-to-join pt-4 pt-md-0" id="call-to-join">
      <div className="container-st">
        <div className="d-flex flex-column flex-lg-row gap-1 align-items-center px-2">
          <div className="text px-3 px-md-4 my-5">
            <h1>
              <span>Together</span>, we can make a difference
            </h1>
            <p className="mb-5">
              By becoming a Stormtrooper NFT holder, you become part of a
              community of like-minded individuals who share a passion for Star
              Wars, a commitment to charity, and a belief in the power of
              technology to make a positive impact on the world.
            </p>
            <div className="socials-box py-4">
              <div className="d-flex align-items-center justify-content-center">
                <a href="#" target="_blank">
                  <GitBook fill="#80339b" />
                </a>
                <a href="#" target="_blank">
                  <Twitter fill="#80339b" />
                </a>
              </div>
            </div>
          </div>
          <div className="image position-relative my-2">
            <img src={callToJoinImage} alt="Call to Join Stormtrooper NFT" />
            <div>Stormtrooper</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToJoin;
