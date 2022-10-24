import React from "react";

const HeroTech = () => {
  return (
    <>
      <div className="container-fluid herotech-fluid py-5">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-md-12 col-lg-10 spacer-y-3">
              <h1 className="mb-4 text-dark herotech-h1" data-aos="fade-up">
                A scalable, interoperable &amp; secure network protocol for the
                next web
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container cards-row">
          <div className="row align-item-center justify-content-center text-dark">
            <div className="col-md-3 mt-3 ">
              <div className="card card-tech shadow-lg bg-white hover-effect rounded-lg">
                <div className="card-body py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://polkadot.network/assets/img/logos/logo-circle-github.svg?v=ea608e625d"
                      className="icon me-2 "
                      alt=""
                     width={50}
                    />
                    <div>
                      <h5 className="mb-1">GitHub</h5>
                      <p className="mb-0">Latest version &amp; history.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="card card-tech shadow-lg bg-white hover-effect card-pill rounded-lg">
                <div className="card-body py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://polkadot.network/assets/img/logos/logo-circle-documentation.svg?v=ea608e625d"
                      className="icon me-2 "
                      alt=""
                     width={50}
                    />
                    <div>
                      <h5 className="mb-1">Documentation</h5>
                      <p className="mb-0">Read the documentation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3 mb-3">
              <div className="card card-tech shadow-lg bg-white hover-effect card-pill rounded-lg">
                <div className="card-body py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://polkadot.network/assets/img/logos/logo-circle-element.svg?v=ea608e625d"
                      className="icon me-2 "
                      alt=""
                     width={50}
                    />
                    <div>
                      <h5 className="mb-1">Element chat</h5>
                      <p className="mb-0">Get your questions answered.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="container-fluid herotech-fluid2 py-5">
        <div className="row py-5">
          <div className="col-md-9 overflow-hidden">
            <img
              className="img-fluid dg-network-img"
              src="assets/technology/dg-network-xl-2.svg"
              alt=""
            />
          </div>
          <div className="col-md-3 pe-5">
            <h2>Any type of data across any type of blockchain</h2>
            <p>
              Polkadot is a network protocol that allows arbitrary data—not just
              tokens—to be transferred across blockchains.
            </p>
            <p>
              This means Polkadot is a true multi-chain application environment
              where things like cross-chain registries and cross-chain
              computation are possible.
            </p>
            <p>
              Polkadot can transfer this data across public, open,
              permissionless blockchains as well as private, permissioned
              blockchains.
            </p>
            <p>
              This makes it possible to build applications that get permissioned
              data from a private blockchain and use it on a public blockchain.
              For instance, a school's private, permissioned academic records
              chain could send a proof to a degree-verification smart contract
              on a public chain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTech;
