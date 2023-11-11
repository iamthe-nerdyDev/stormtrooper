import { Button } from "..";
import callToJoinImage from "../../assets/images/join-us.png";
import "./CallToJoin.css";

const CallToJoin = () => {
  return (
    <section className="call-to-join pt-4 pt-md-0" id="call-to-join">
      <div className="container-st">
        <div className="d-flex flex-column flex-lg-row gap-1 align-items-center">
          <div className="text px-4 my-5">
            <h1>
              <span>Together</span>, we can make a difference
            </h1>
            <p className="mb-4">
              By becoming a Stormtrooper NFT holder, you become part of a
              community of like-minded individuals who share a passion for Star
              Wars, a commitment to charity, and a belief in the power of
              technology to make a positive impact on the world.
            </p>
            <Button label="Connect Wallet" />
          </div>
          <div className="image position-relative">
            <img src={callToJoinImage} alt="Call to Join Stormtrooper NFT" />
            <div>Stormtrooper</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToJoin;
