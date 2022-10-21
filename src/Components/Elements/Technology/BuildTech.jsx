import React from "react";

const BuildTech = () => {
  return (
    <>
      <div className="container-fluid buildtech-fluid1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="https://polkadot.network/assets/img/dg-stack.svg?v=ea608e625d"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h2>Built with the best technology</h2>
              <p>
                Polkadot’s relay chain is built with{" "}
                <a
                  href="https://www.substrate.io"
                  rel="nofollow noopener noreferrer"
                  className="text-underline text-black"
                >
                  Substrate
                </a>
                , a blockchain-building framework that is the distillation of
                Parity Technologies’ learnings building Ethereum, Bitcoin, and
                enterprise blockchains.
              </p>
              <p>
                Polkadot’s state machine is compiled to WebAssembly (Wasm), a
                super performant virtual environment. Wasm is developed by major
                companies, including Google, Apple, Microsoft, and Mozilla, that
                have created a large ecosystem of support for the standard.
              </p>

              <p>
                Polkadot’s networking uses libp2p, a flexible cross-platform
                network framework for peer-to-peer applications. Positioned to
                be the standard for future decentralized applications, libp2p
                handles the peer discovery and communication in the Polkadot
                ecosystem.
              </p>

              <p>
                The Polkadot runtime environment is being coded in Rust, C++,
                and Golang, making Polkadot accessible to a wide range of
                developers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid buildtech-fluid2 py-5">
        <div className="container">
          <div className="row align-item-center justify-content-center">
            <div className="col-md-8 text-center">
              {" "}
              <h1 className="build-h1 py-5 fw-bold">
                Parachains: parallel transaction processing
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className="build-tech-p">
                Parachains are specialized blockchains that connect to Polkadot.
                They will have characteristics specialized for their use cases
                and the ability to control their own governance. <br/><br/> Interactions on
                parachains are processed in parallel, enabling highly scalable
                systems. <br/><br/> Transactions can be spread out across the chains,
                allowing many more transactions to be processed in the same
                period of time.
              </p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3 mb-4" >Learn more about parachains</a>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <h5 className="build-h5 fw-bold">Current method:</h5>
                <p className="build-tech-p">Single transaction</p>
                <img className="img-fluid me-5" src="https://polkadot.network/assets/img/dg-transactions-old.svg?v=ea608e625d" alt="" />
            </div>
            <div className="col-md-3">
                <h5 className="build-h5 fw-bold">Polkadot method:</h5>
                <p className="build-tech-p">Multi parallelized transactions</p>
                <img className="img-fluid me-5" src="https://polkadot.network/assets/img/dg-transactions-new.svg?v=ea608e625d"alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid buildtech-fluid3 py-5">
        <div className="container">
            <div className="row align-item-center justify-content-center">
                <div className="col-md-6 text-center">
                    <h1>Groundbreaking Technology</h1>
                    <p>Polkadot is solving many of the problems that have held back blockchain technology so far — all in one place, without compromising.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default BuildTech;
