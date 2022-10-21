import React from "react";

const Roadmap = () => {
  return (
    <>
      <div className="container-fluid roadmap-fluid py-5">
        <div className="container">
          <div className="row align-item-center justify-content-center py-5">
            <div className="col-md-8 text-center">
              <h1>Roadmap</h1>
              <p>
                The launch of Polkadot v1 began in May 2020 with the Relay Chain
                genesis block and finished in December 2021 with the launch of
                parachains. Several post-launch developments and optimizations
                are expected for 2022 and beyond.
              </p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3">
                See Launch Roadmap
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
