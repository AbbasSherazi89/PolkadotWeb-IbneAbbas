import React from "react";

const AboutBlog = () => {
  return (
    <div className="blog-main" >
      <div className="container-fluid blog-fluid py-5">
        <div className="container">
          <div className="row align-item-center justify-content-center">
            <h1 className=" text-center Blog-h1 fw-bold py-4">From the blog</h1>
            <div className="col-md-1" />
            <div className="col-md-3 mt-4 ms-1">
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/card-img1.png"
                  alt="card"
                  width={400}
                />
                <div className="card-body">
                  <a className="anchor-tag text-decoration-none" href="/">
                    Parachain
                  </a>
                  <h5 className="card-title pt-3">
                    First Parachain Successfully Migrates from Kusama to
                    Polkadot
                  </h5>
                  <p className="card-text py-2">
                    KILT Protocol's migration from Kusama to Polkadot is an
                    important technical milestone and the first parachain
                    migration. Polkadot's 'canary network' model allows Web3
                    projects to test their technology in a real-world
                    environment before upgrading to stable production
                    networks....
                  </p>
                  <div>
                    <img
                      className="img-fluid"
                      src="assets/Polkadot_Logo1.jpg"
                      alt=" Logo "
                      width={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4 ms-1">
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/card-img2.png"
                  alt="card"
                />
                <div className="card-body">
                  <a className="anchor-tag text-decoration-none" href="/">
                    Polkadot
                  </a>
                  <h5 className="card-title pt-3">Polkadot Roadmap Roundup</h5>
                  <p className="card-text py-2">
                    A proposed roadmap for upcoming developments on Polkadot.
                    Get the latest status on asynchronous backing, parathreads,
                    XCMv3, governance, common-good parachains and more....
                  </p>
                  <br/>
                  <div className="pb-5 mb-5"/>
                    <img
                      className="img-fluid"
                      src="assets/Polkadot_Logo1.jpg"
                      alt=" Logo "
                      width={100}
                    />
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-4 ms-1">
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/card-img3.jpg"
                  alt="card"
                />
                <div className="card-body">
                  <a className="anchor-tag text-decoration-none" href="/">
                    Polkadot
                  </a>
                  <h5 className="card-title pt-3">
                    Sub0, the Polkadot Developer Conference, comes to Lisbon in
                    November
                  </h5>
                  <p className="card-text py-2">
                    The two-day live sub0 conference will run on November
                    28th-29th. Featuring keynote presentations, breakout
                    sessions, workshops & side events. Sign up for ticket
                    updates....
                  </p>
                    <div className="pb-5 mb-5"/>
                    <img
                      className="img-fluid"
                      src="assets/Polkadot_Logo1.jpg"
                      alt=" Logo "
                      width={100}
                    />
                  
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row text-center py-5">
          <div className="col-md-2"/>
            <div className="col-md-8 ">
            <h1 className="text-center Blog-h1 fw-bold py-4">Want to get involved?</h1>
            <a href="/parachains" className="btn btn-primary btn-lg me-3">Join The Community</a>
            </div>
          <div className="col-md-2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlog;
