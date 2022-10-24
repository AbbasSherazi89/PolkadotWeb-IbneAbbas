import React from "react";
import { ScrollRotate } from "react-scroll-rotate";
const Hero = () => {
  return (
    <>
      <div className="container-fluid hero-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="hero-h1 fw-bold py-3">
                The multichain vision for Web3 starts here.
              </h1>
              <p className="hero-p pb-3">
                Polkadot unites and secures a growing ecosystem of specialized
                blockchains called parachains. Apps and services on Polkadot can
                securely communicate across chains, forming the basis for a
                truly interoperable decentralized web.
              </p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3">
                Learn Parachains
              </a>
              <a
                href="/cross-chain-communication"
                className="btn btn-primary btn-lg"
              >
                Learn Cross-Chain
              </a>
            </div>
            <div className="col-md-6 xcm-animation-col">
              <ScrollRotate>
                <span className="">
                  <img className="img-fluid xcm-animation-inner" src="assets/xcm-animation-outer.svg" alt="" width={500} />
                  <img className="img-fluid xcm-animation-outer" src="assets/xcm-animation-inner.png" alt="" width={500}/>
                </span>
              </ScrollRotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
