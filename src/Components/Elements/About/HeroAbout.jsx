import React from "react";

const HeroAbout = () => {
  return (
    <>
      <div className="container-fluid heroabout-fluid">
        <div className="container">
          <div className="row d-flex align-item-center justify-content-center pt-5">
            <div className="col-md-8 text-center">
              <h1 className="text-dark heroabout-h1" data-aos="fade-up">
                About Polkadot, a platform for Web3
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid heroabout-fluid1 py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <h1>The Polkadot mission</h1>
              <p>
                We envision a Web where our identity and our data is our own -
                safely secured from any central authority.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Polkadot will enable a completely decentralized web where users
                are in control.
              </p>
              <p>
                Polkadot is built to connect private and consortium chains,
                public and permissionless networks, oracles, and future
                technologies that are yet to be created. Polkadot facilitates an
                internet where independent blockchains can exchange information
                and transactions in a trustless way via the Polkadot relay
                chain.
              </p>
              <p>
                Polkadot makes it easier than ever to create and connect
                decentralized applications, services, and institutions. By
                empowering innovators to build better solutions, we seek to free
                society from its reliance on a broken web where its large
                institutions can’t violate our trust.
              </p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3 mt-4" >Learn About the Technology</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
