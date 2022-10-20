import { React } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar--secondary navbar-expand-lg navbar-light bg-white border-bottom py-0">
        <div className="container">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle btn-lng-choice mb-1 mb-lg-0"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="lng text-uppercase text-muted">en</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button">
                  español
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  中文
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  日本語
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  한국어
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  русский
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Türkçe
                </button>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item position-relative">
              <Link className="nav-link " id="upper-item-hover" aria-current="page" to="/">
                Lightpaper
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="upper-item-hover" href="#litepaper">
                Whitepaper
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#platform">
                Wiki
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="upper-item-hover" href="#roadmap">
                <AiFillGithub className="header-icons" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="upper-item-hover" href="#faq">
                <FaDiscord className="header-icons" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="upper-item-hover" href="#faq">
                <AiFillTwitterCircle className="header-icons" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg sticky-top bg-white py-1">
        <div className="container">
          <Link to="/">
            <div>
              <img
                className="quant"
                src="assets/Polkadot_Logo1.jpg"
                alt=" Logo "
                width={150}
              />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className=" header-nav-col collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item position-relative ">
                <Link className="nav-link text-dark" aria-current="page" to="/">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#litepaper">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#platform">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#roadmap">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#faq">
                  Build
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* </div> */}
    </>
  );
};

export default Header;
