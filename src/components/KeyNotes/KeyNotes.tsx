import RoyaltiesIcon from "../../assets/images/royalties.png";
import GivinngIcon from "../../assets/images/giving.png";

import "./KeyNotes.css";

const KeyNotes = () => {
  return (
    <section className="keynote py-5" id="keynote">
      <div className="container-st my-4">
        <div className="row">
          <div className="col-12">
            <div className="px-4">
              <div className="row g-4 g-md-5">
                <div className="col-12 col-md-6 mb-5 mb-md-0">
                  <div className="keynote-single">
                    <div>
                      <hr />
                      <span>keynote one</span>
                    </div>
                    <img src={GivinngIcon} className="my-4" alt="" />
                    <h3>A legacy of giving</h3>
                    <p>
                      The Stormtrooper NFT project has partnered with several
                      reputable charities, ensuring that every contribution
                      makes a meaningful difference. From supporting educational
                      initiatives to providing aid to those in need,
                      Stormtrooper NFT is committed to leaving a lasting legacy
                      of positive impact.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="keynote-single">
                    <div>
                      <hr />
                      <span>keynote two</span>
                    </div>
                    <img src={RoyaltiesIcon} className="my-4" alt="" />
                    <h3>Rewarding collectors</h3>
                    <p>
                      In recognition of their unwavering support, Stormtrooper
                      NFT holders are not only contributing to a worthy cause
                      but also stand to reap significant rewards. Royalty
                      payments are distributed to holders on a regular basis,
                      ensuring a share in the project's success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyNotes;
