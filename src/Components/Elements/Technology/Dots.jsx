import React from "react";

const Dots = () => {
  return (
    <>
      <div className="container-fluid dots-fluid py-5">
        <div className="container">
          <h1 className="pb-4 fw-bold">Connecting the dots</h1>
          <div className="row my-3">
            <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-relay-chain.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Relay Chain
                </h5>
                <p className="py-3">
                The heart of Polkadot, responsible for the network’s shared security, consensus and cross-chain interoperability.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parachain.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Parachains
                </h5>
                <p className="py-3">
                Sovereign blockchains that can have their own tokens and optimize their functionality for specific use cases.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-parathread.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Parathreads
                </h5>
                <p className="py-3">
                Similar to parachains but with a pay-as-you-go model. More economical for blockchains that don’t need continuous connectivity to the network.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-bridge.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Bridges
                </h5>
                <p className="py-3">
                Allow parachains and parathreads to connect and communicate with external networks like Ethereum and Bitcoin.
                </p>
              </div>
            </div>
          </div>
          <h1 className="pb-4 fw-bold">Consensus Roles</h1>
          <div className="row py-3">
          <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-nominator.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Nominators
                </h5>
                <p className="py-3">
                Secure the Relay Chain by selecting trustworthy validators and staking dots.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
               src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-validator.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Validators
                </h5>
                <p className="py-3">
                Secure the relay chain by staking dots, validating proofs from collators and participating in consensus with other validators.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-collator.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Collators
                </h5>
                <p className="py-3">
                Maintain shards by collecting shard transactions from users and producing proofs for validator.
                </p>
              </div>
            </div>
          </div>
          <h1 className="pb-4 fw-bold">Governance Roles</h1>
          <div className="row py-3">
          <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-council-member-2.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Council Members
                </h5>
                <p className="py-3">
                Elected to represent passive stakeholders in two primary governance roles: proposing referenda and vetoing dangerous or malicious referenda.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src="https://polkadot.network/assets/img/icons/glossary/icon-glossary-technical-committee-2.svg?v=ea608e625d"
                alt=""
                className="img-fluid"
                width={120}
              />
              <div className="pe-3">
                <h5 className="h5 mb-2 mt-2 fw-bold  pt-3">
                Technical Committee
                </h5>
                <p className="py-3">
                Composed of teams actively building Polkadot. Can propose emergency referenda, together with the council, for fast-tracked voting and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dots;
