import React from "react";

const ContactTouch = () => {
  return (
    <div className="touch-main">
      <div className="container-fluid touch-fluid1 py-5">
        <div className="container">
          <div className="row card-row align-item-center justify-content-center text-dark pb-5">
            <div className="col-md-4 mt-3 ">
              <div className="card shadow-lg bg-white hover-effect rounded-lg">
                <div className="card-body py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://polkadot.network/assets/img/logos/logo-circle-chat.svg?v=ea608e625d"
                      className="icon me-4 "
                      alt=""
                      width={50}
                    />
                    <div>
                      <h5 className="mb-1">For general chat</h5>
                      <p className="mb-0">Join the Watercooler or Discord</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="card shadow-lg bg-white hover-effect card-pill rounded-lg">
                <div className="card-body py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://polkadot.network/assets/img/logos/logo-circle-newsletter.svg?v=ea608e625d"
                      className="icon me-4 "
                      alt=""
                      width={50}
                    />
                    <div>
                      <h5 className="mb-1">For press inquiries</h5>
                      <p className="mb-0">Please fill out this form</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="card shadow-lg bg-white hover-effect card-pill rounded-lg">
                <div className="card-body py-2">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://polkadot.network/assets/img/logos/logo-circle-email.svg?v=ea608e625d"
                      className="icon me-4 "
                      alt=""
                      width={50}
                    />
                    <div>
                      <h5 className="mb-1">For all other inquiries</h5>
                      <p className="mb-0">support.polkadot.network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-item-center justify-content-center py-5">
            <div className="col-md-5 text-center v-line mt-3 mb-5">
              <h2>Stay informed of updates and events</h2>
              <p>Subscribe to the newsletter or read the blog</p>
            </div>
            <div className="col-md-5 text-center mt-3 mb-5">
              <h2>Join the teams building Polkadot</h2>
              <p>See jobs at Web3 Foundation or at Parity Technologies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid touch-fluid2 py-5">
        <div className="container">
          <div className="row align-item-center justify-content-center py-5 ">
            <div className="col-md-6 text-center">
              <h1>Get your questions answered</h1>
              <a
                href="/parachains"
                className="btn btn-primary btn-lg me-3 mt-3"
              >
                Join the Polkadot Chat
              </a>
              <p>or learn how to build on Polkadot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTouch;
