import React from "react";

const BuildHero = () => {
  return (
    <>
      <div className="container-fluid herobuild-fluid py-5">
        <div className="container">
          <div className="row cards-row text-center justify-content-center">
            <div className="col-md-8">
              <h1 className="mb-4" data-aos="fade-up">
                Build on Polkadot
              </h1>
              <p className="herocomm-p">
                Polkadot is 100% open-source. Anyone can contribute to the
                codebase, run a node, or build services on Polkadot. You can
                even get a grant.
              </p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3">
                Start Building
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildHero;
