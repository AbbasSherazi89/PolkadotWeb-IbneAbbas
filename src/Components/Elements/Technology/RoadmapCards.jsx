import React from "react";

const RoadmapCards = () => {
  return (
    <>
      <div className="container-fluid roadcards-fluid py-5">
        <div className="container">
          <div className="row align-item-center justify-content-center">
            <div className="col-md-8 text-center">
              <h1>What are teams building on Polkadot? Just a few examples:</h1>
            </div>
          </div>
          <div className="row align-item-center justify-content-center">
            <div className="col-md-3">
              <div className="card p-3">
                <p>
                  <strong className="fw-bold">Smart contract chains</strong>{" "}
                  with WebAssembly smart contracts (Astar, Moonbeam)
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <p>
                  <strong className="fw-bold">Data curation networks</strong>{" "}
                  that connect all file storage chains into curated data sets
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3">
                <p>
                  <strong className="fw-bold">Oracle chains</strong> that make
                  off-chain data available to all contracts on the Polkadot
                  network (ChainLink)
                </p>
              </div>
            </div>
          </div>
          <div className="row align-item-center justify-content-center">
            <div className="col-md-3">
              <div className="card card2 p-3">
                <p>
                  <strong className="fw-bold">Identity chains</strong> that link
                  accounts to a persistent identity and enable access to other
                  parachains through fewer accounts (Kilt)
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card2 p-3">
                <p>
                  <strong className="fw-bold">Financial chains</strong> that
                  allow you to hold all your assets in one portfolio, including
                  via bridges to Bitcoin, Ethereum, Bitcoin Cash, Litecoin and
                  ZCash (Acala, Parallel Finance)
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card2 p-3">
                <p>
                  <strong className="fw-bold">Internet of Things chains</strong>{" "}
                  that set IoT standards for machine-to-machine communication
                  (Robonomics)
                </p>
              </div>
            </div>
          </div>
          <div className="row align-item-center justify-content-center pb-5">
            <div className="col-md-3">
              <div className="card card3 p-3">
                <p>
                  <strong className="fw-bold">Zero Knowledge</strong> privacy
                  chains, or bridges to existing ZK-snarks chains
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card3 p-3">
                <p>
                  <strong className="fw-bold">File storage chains</strong> that
                  incentivize storing data on-chain
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card3 p-3">
                <p>
                  <strong className="fw-bold">Bridge to Ethereum</strong>,
                  allowing Ethereum smart contracts to interact with the
                  Polkadot network
                </p>
              </div>
            </div>
          </div>
          <div className="row align-item-center justify-content-center py-5">
            <div className="col-md-5 text-center">
            <h1>Want to get started?</h1>
            <a href="/parachains" className="btn btn-primary btn-lg me-3" >Build on Polkadot</a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapCards;
