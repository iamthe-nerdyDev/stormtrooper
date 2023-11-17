import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta p-2" id="cta">
      <div className="container-st">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="cta-main py-5 px-4">
              <div className="row my-3">
                <div className="col-12 col-md-8 col-lg-5 mx-auto">
                  <div className="d-flex flex-column gap-2">
                    <p className="mb-4">
                      Join us today to learn more about the Stormtrooper NFT
                      project and our mission to make a difference through the
                      power of NFTs.
                    </p>
                    <h1>--- Don't just collect, make an impact.</h1>
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

export default CTA;
