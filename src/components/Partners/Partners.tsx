import UNICEF from "../../assets/partners/UNICEF.png";
import JIFAD from "../../assets/partners/JIFAD.jpeg";
import UN from "../../assets/partners/UN.png";
import UNDP from "../../assets/partners/UNDP.png";
import unesco from "../../assets/partners/unesco.jpeg";
import unido from "../../assets/partners/unido.png";

import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <div className="container-st">
        <div className="row">
          <div className="col-12">
            <div className="px-4 py-5">
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-1">
                <div className="partner-single">
                  <img src={UNICEF} alt="UNICEF" />
                </div>
                <div className="partner-single">
                  <img src={UN} alt="UN" />
                </div>
                <div className="partner-single">
                  <img src={JIFAD} alt="JIFAD" />
                </div>
                <div className="partner-single">
                  <img src={UNDP} alt="UNDP" />
                </div>
                <div className="partner-single">
                  <img src={unesco} alt="unesco" />
                </div>
                <div className="partner-single">
                  <img src={unido} alt="unido" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
