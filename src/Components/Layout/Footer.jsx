import React from "react";
import {
  AiFillTwitterCircle,
  AiFillRedditCircle,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer-fluid text-center text-lg-start pt-5">
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-6 col-md-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">General</h6>
                <p>
                  <a href="/" className="text-muted">
                    About
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Telemetry
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Roadmap
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Support
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Build
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Grants and Bounties
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Careers
                  </a>
                </p>
              </div>

              <div className="col-6 col-md-3 mx-auto mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">Technology</h6>
                <p>
                  <a href="/" className="text-muted">
                    Technology
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Staking
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    XCM
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Parachains
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Token
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Substrate
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Lightpaper
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Whitepaper
                  </a>
                </p>
              </div>

              <div className="col-6 col-md-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Community</h6>
                <p>
                  <a href="/" className="text-muted">
                    Community
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Academy
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Auctions
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Treasury
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Documentation
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Brand Assets
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Element Chat
                  </a>
                </p>
                <p>
                  <a href="/" className="text-muted">
                    Medium
                  </a>
                </p>
              </div>

              <div className="col-md-3 mb-4">
                <div>
                  <AiFillTwitterCircle className="footer-icons" />
                  <AiFillRedditCircle className="footer-icons ms-3" />
                  <AiFillGithub className="footer-icons ms-3" />
                  <AiFillYoutube className="footer-icons ms-3" />
                  <FaDiscord className="footer-icons ms-3" />
                </div>
                <p className="py-4 footer-p">Subscribe to the newsletter to hear about Polkadot updates and events.</p>
              <a href="/parachains" className="btn btn-primary btn-lg me-3" >Subscribe</a>
              </div>
            </div>
          </div>
        </section>

        <div className="container p-4">
          <div className="container">
            <div className="row pt-3 pb-3">
              <div className="col-md-2 pt-2">
                <img src="assets/logo-polkadot-light.svg" alt=" " width={100} />
              </div>
              <div className="col-md-10 pt-2">
                <a className="text-muted" href="/"> © 2022 Web3 Foundation</a>
                <a className="text-muted" href="/"> | Impressum</a>
                <a className="text-muted" href="/"> | Disclaimer</a>
                <a  className="text-muted" href="/"> | Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
