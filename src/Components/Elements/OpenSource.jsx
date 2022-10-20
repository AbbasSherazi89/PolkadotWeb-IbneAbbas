import React from "react";

const OpenSource = () => {
  return (
    <>
      <div className="container-fluid opensource-fluid1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <h1 className="open-h1 fw-bold py-4">
                  An open-source protocol built for everyone
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <p className="open-p py-4">
                  Polkadot is an open-source project founded by the Web3
                  Foundation.
                  <br />
                  <br /> Web3 Foundation has commissioned five teams and over
                  100 developers to build Polkadot, including:
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md-3 mt-3 text-center">
              <img
                className="img-fluid"
                src="assets/logo-circle-parity-white.svg"
                alt=""
                width={100}
              />
            </div>
            <div className="col-md-3 mt-3 text-center">
              <img
                className="img-fluid"
                src="assets/logo-circle-chainsafe-white.svg"
                alt=""
                width={100}
              />
            </div>
            <div className="col-md-3 mt-3 text-center">
              <img
                className="img-fluid"
                src="assets/logo-circle-soramitsu-white.svg"
                alt=""
                width={100}
              />
            </div>
            <div className="col-md-3 mt-3 text-center">
              <img
                className="img-fluid"
                src="assets/logo-circle-polkadot-js-white.svg"
                alt=""
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid opensource-fluid2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h1 className="open2-h1 fw-bold py-5">
                Founded by some of the blockchain industry’s foremost builders
              </h1>
              <a href="/parachains" className="btn btn-primary btn-lg me-3">Learn about the Polkadot Team</a>

            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenSource;
