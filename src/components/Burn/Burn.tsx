import burnImage from "../../assets/images/burn.png";
import "./Burn.css";

const Burn = () => {
  return (
    <section className="burn py-5" id="burn">
      <div className="container-st my-4">
        <div className="row">
          <div className="col-12">
            <div className="px-3">
              <div className="row g-4 g-md-5 align-items-center">
                <div className="col-10 col-md-5 mx-auto mb-3 mb-md-0">
                  <img src={burnImage} alt="Burn" />
                </div>
                <div className="col-12 col-md-7">
                  <h2>
                    The <span>Burning</span> Mechanism
                  </h2>
                  <p>
                    To maintain the exclusivity and value of&nbsp;
                    <span>Stormtrooper NFTs</span>, a unique burning mechanism
                    is employed.
                    <br />
                    <br />A portion of the proceeds from each sale is used to
                    purchase and permanently remove&nbsp;
                    <span>Stormtrooper NFTs</span> from circulation, effectively
                    reducing the overall supply and enhancing the value of
                    remaining NFTs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Burn;
