import React from "react";

const Token = () => {
  return (
    <>
      <div className="container-fluid token-fluid py-5">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-2" />
            <div className="col-md-8 text-center">
              <h1 className="token-h1 fw-bold py-4">
                Powering the Polkadot network
              </h1>
              <p className="token-p pb-4">
                The DOT token serves three distinct purposes:
                <br />
                governance over the network, staking and bonding.
              </p>
            </div>
            <div className="col-md-2" />
          </div>
          <div className="row py-3">
            <div className="col-md-4 text-center mt-2">
              <img
                src="assets/home-icon-token-1.svg"
                alt=""
                className="img-fluid"
                width={200}
              />
              <div className="p-5">
                <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">
                Governance
                </h5>
                <p className="py-3">
                Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mt-2">
              <img
                src="assets/home-icon-token-2.svg"
                alt=""
                className="img-fluid"
                width={200}
              />
              <div className="p-5">
                <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">
                Staking
                </h5>
                <p className="py-3">
                Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mt-2">
              <img
                src="assets/home-icon-token-3.svg"
                alt=""
                className="img-fluid"
                width={200}
              />
              <div className="p-5">
                <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">
                Bonding
                </h5>
                <p className="py-3">
                New parachains are added by bonding tokens. Outdated or non-useful parachains are removed by removing bonded tokens. This is a form of proof of stake.
                </p>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center">
            <h1 className="token-h1 fw-bold py-4">
            Learn more about the DOT token
              </h1>
              <a href="/parachains" className="btn btn-primary btn-lg me-3" >Discover DOT</a>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
