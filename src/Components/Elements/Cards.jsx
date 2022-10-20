import React from "react";

const Cards = () => {
  return (
    <>
      <div className="container-fluid cards-fluid py-5">
        <div className="container align-items-center">
          <div className="row my-3">
            <div className="col-md-4">
              <img src="assets/home-icon1.svg" alt="" className="img-fluid" width={70} />
              <div className="pe-3">
              <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">True interoperability</h5>
              <p className="py-3">Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="assets/home-icon2.svg" alt="" className="img-fluid" width={70} />
              <div className="pe-3">
              <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">Economic & transactional scalability</h5>
              <p className="py-3">Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains.</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="assets/home-icon3.svg" alt="" className="img-fluid" width={70} />
              <div className="pe-3">
              <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">Easy blockchain innovation</h5>
              <p className="py-3">Create a custom blockchain in minutes using the Substrate framework. Connect your chain to Polkadot and get interoperability and security from day one. This ease of development helps Polkadot's network grow.</p>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-4">
              <img src="assets/home-icon4.svg" alt="" className="img-fluid" width={70} />
              <div className="pe-3">
              <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">High energy efficiency</h5>
              <p className="py-3">Polkadot consumes a small fraction of the energy used by conventional blockchains thanks to its next-generation nominated proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US households worth of energy per year, Polkadot has the lowest carbon footprint among proof-of-stake protocols analyzed in recent research.</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="assets/home-icon5.svg" alt="" className="img-fluid" width={70} />
              <div className="pe-3">
              <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">Security for everyone</h5>
              <p className="py-3">Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security.</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="assets/home-icon6.svg" alt="" className="img-fluid" width={70} />
              <div className="pe-3">
              <h5 className="h5 mb-2 mt-2 font-weight-bold pt-3">User-driven governance</h5>
              <p className="py-3">Polkadot has a sophisticated governance system where all stakeholders have a voice. Network upgrades are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Polkadot’s development remains future-proof and community-driven.</p>
              </div>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
              <h1 className=" cards-h1 fw-bold py-4">Learn more about Polkadot's technology</h1>
              <a href="/parachains" className="btn btn-primary btn-lg me-3" >Discover Palkadot</a>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
