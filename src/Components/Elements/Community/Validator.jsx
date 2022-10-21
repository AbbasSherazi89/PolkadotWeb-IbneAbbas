import React from "react";

const Validator = () => {
  return (
    <>
      <div className="container-fluid validator-fluid py-5">
        <div className="container">
          <div className="row">
            <h1 className="py-4">Become a validator</h1>
            <div className="col-md-6">
              <h3 className="py-2">1. Set up your machine</h3>
              <p>
                In addition to any usual CLI parameters that you run polkadot
                with, you'll need to add an extra two:
              </p>
              <ul>
                <li>
                  {" "}
                  <span className="span-li">--validator</span> This tells your
                  node to try to validate when it sees itself as a listed
                  authority on the network;
                </li>
                <li>
                  {" "}
                  <span className="span-li"> --key </span> This provides your
                  node with a secret key that lets it know whether it's a listed
                  authority on the network, and, if it is, lets it sign
                  statements to authorise the creation of new blocks.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="py-2">2. Apply to validate</h3>
              <p>
                New validators will be chosen every 24 hours on mainnet. You’ll
                need to create separate accounts for Controller, Session, and
                Stash keys on the Polkadot UI
                (https://polkadot.js.org/apps/#/accounts/create). These accounts
                will be used to represent and control the validator node you
                just set up.
              </p>
              <p>
                Next you will need to get some DOT from the faucet or by asking
                on Element. Assuming you have more DOT than the lowest staked
                validator or there is an open validator slot, you can register
                to be staked. A step-by-step guide demonstrating how to set up
                your accounts and bond your DOT is available on the wiki.
              </p>
            </div>
          </div>
          <div className="row align-item-center justify-content-center py-5">
            <div className="col-md-8 text-center">
              <h1 className="py-3">Want to become a validator?</h1>
              <a href="/parachains" className="btn btn-primary btn-lg me-3">
                Read More
              </a>
              <p className="py-3 ">You can see validator stats on Telemetry.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid validator-fluid1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Get a grant to build the Polkadot ecosystem</h2>
              <p>
                Web3 Foundation provides grants to steward research and
                development of Polkadot and the Web3 tech stack. The program
                funds work on runtime modules and parachains, development tools,
                UI, protocol integrations, maintenance, and more.
              </p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3">
                Learn More
              </a>
            </div>
            <div className="col-md-6">
                <h2>Apply for funding from the Polkadot treasury</h2>
                <p>The Polkadot community supports projects that benefit the network with funding from the Polkadot treasury, an on-chain pot of DOT tokens. Submit a proposal for a project related to software, infrastructure, or app development, marketing, community outreach, educational initiatives, and more.</p>
                <a href="/parachains" className="btn btn-primary btn-lg me-3">
                Learn More
              </a>
              <h2>Become a Polkadot Ambassador</h2>
              <p>Check out the post and apply to join the vibrant polkadot community.</p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Validator;
