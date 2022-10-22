import React from "react";

const BuildCards = () => {
  return (
    <div className="cardbuild-main">
      <div className="container-fluid cardbuild-fluid py-5">
        <div className="container">
          <div className="row cards-row text-center justify-content-center py-4">
            <div className="col-md-9">
              <h1 className="mb-5">
                Easily build a Polkadot parachain with Substrate
              </h1>
              <p>
                Build your application-specific blockchain with the{" "}
                <a href="/"> Substrate</a> framework now and easily connect it
                to Polkadot after launch.
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-4">
              <div className="d-flex">
                <div>
                  <h5>Native Polkadot compatibility</h5>
                  <p className="text-white">
                    Blockchains built with Substrate are natively compatible
                    with Polkadot, so they can be easily connected to Polkadot
                    as a parachain or parathread.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex">
                <div>
                  <h5>Fork-free upgrades</h5>
                  <p className="text-white">
                    Upgrade your blockchain without a hard fork. Your runtime is
                    a Wasm binary stored on-chain and can be updated using your
                    chain’s governance mechanism.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex">
                <div>
                  <h5>Plug-and-play modular framework</h5>
                  <p className="text-white">
                    Substrate allows you to simply plug in the functionalities
                    you need, while also giving you the freedom to customize as
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-md-4">
              <div className="d-flex">
                <div>
                  <h5>Interchain connectivity</h5>
                  <p className="text-white">
                    By connecting your blockchain to Polkadot, your blockchain
                    will be able to pass arbitrary messages to other chains in
                    the Polkadot network.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex">
                <div>
                  <h5>Instant security</h5>
                  <p className="text-white">
                    Simply by connecting your blockchain to Polkadot, your
                    blockchain will be secured by Polkadot’s pooled security.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex">
                <div>
                  <h5>Multiple languages</h5>
                  <p className="text-white">
                    With Substrate, you can write your blockchain logic in any
                    language that can compile to WebAssembly (Rust, C/C++, C#,
                    Go, etc).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid cardbuild-fluid1 py-5">
        <div className="container">
          <div className="row cards-row text-center justify-content-center py-4">
            <div className="col-md-9">
              <h1 className="mb-5">Tools that come with Substrate</h1>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-4">
              <div className="card p-3">
                <strong>Polkadot Telemetry Service</strong>
                <p>Network information</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <strong>Substrate and Polkadot UI</strong>
                <p>Built with React.js and RxJS</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <strong>Substrate UI</strong>
                <p>Built with the Bonds oo7 library</p>
              </div>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-md-4">
              <div className="card p-3">
                <strong>Polkabot</strong>
                <p>Network monitoring and reporting</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <strong>Polkascan</strong>
                <p>Blockchain data explorer and analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid cardbuild-fluid2 py-5">
        <div className="container">
          <div className="row align-item-center justify-content-center py-5 ">
            <div className="col-md-6 text-center">
              <h1>Start building your custom parachain with Substrate</h1>
              <a
                href="/parachains"
                className="btn btn-primary btn-lg me-3 mt-3"
              >
                Substrate Developer Hub
              </a>
              <p>or learn More.</p>
            </div>
          </div>
          <div className="row align-item-center justify-content-center py-5">
            <div className="col-md-5 col1">
              <h2>Get a grant to build the Polkadot ecosystem</h2>
              <p>
                Web3 Foundation provides grants to steward research and
                development of Polkadot and the Web3 tech stack. The program
                funds work on runtime modules and parachains, development tools,
                UI, protocol integrations, maintenance, and more.
              </p>
              <a
                href="/parachains"
                className="btn btn-primary btn-lg me-3 mt-3"
              >
                Learn More
              </a>
            </div>
            <div className="col-md-5 col2">
              <ul>
                <li>
                  Development and deployment tooling (e.g. IDEs, parachain
                  development kits)
                </li>
                <li>
                  Polkadot Runtime Modules (e.g. interoperability, governance)
                </li>
                <li>
                  Second layer protocols (e.g. dedicated parachains, state
                  channels)
                </li>
                <li>Monitoring (e.g. explorers)</li>
                <li>
                  Protocol integrations (e.g. bridges to other blockchains,
                  distributed file storage)
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-item-center justify-content-center py-5 ">
            <div className="col-md-6 text-center">
              <h1>Have a question about building on Polkadot?</h1>
              <a
                href="/parachains"
                className="btn btn-primary btn-lg me-3 mt-3"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCards;
