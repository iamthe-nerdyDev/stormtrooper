import { Discord, Github, Menu, Telegram, Twitter } from "../../icons";
import { useState } from "react";
import stormtrooperLogo from "../../assets/images/logo.svg";

import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsnavOpen] = useState<boolean>(false);

  return (
    <>
      <nav>
        <div className="container-st position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="navbar-brand d-flex align-items-center">
              <img src={stormtrooperLogo} alt="Stormtrooper Logo" />
              <h2>Stormtrooper NFT</h2>
            </div>
            <div className="nav-links">
              <ul className="d-flex align-items-center justify-content-between">
                <li className="active">
                  <a href="#intro">Brief Intro.</a>
                </li>
                <li>
                  <a href="#mission">Mission</a>
                </li>
                <li>
                  <a href="#join">Be a Member</a>
                </li>
                <li>
                  <a href="https://opensea.com" target="_blank">
                    Opensea
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center gap-1">
              <div className="nav-socials">
                <div className="d-flex align-items-center">
                  <a href="#" target="_blank">
                    <Github fill="#80339b" />
                  </a>
                  <a href="#" target="_blank">
                    <Discord fill="#80339b" />
                  </a>
                  <a href="#" target="_blank">
                    <Telegram fill="#80339b" />
                  </a>
                  <a href="#" target="_blank">
                    <Twitter fill="#80339b" />
                  </a>
                </div>
              </div>
              <div className="nav-menu">
                <div onClick={() => setIsnavOpen(!isNavOpen)}>
                  <Menu />
                </div>
              </div>
            </div>
          </div>
          {isNavOpen && (
            <div className="nav-link-mobile">
              <ul>
                <li className="active">
                  <a href="#intro">Brief Intro.</a>
                </li>
                <li>
                  <a href="#mission">Mission</a>
                </li>
                <li>
                  <a href="#join">Be a Member</a>
                </li>
                <li>
                  <a href="https://opensea.com" target="_blank">
                    Opensea
                  </a>
                </li>
              </ul>
              <div className="socials d-block d-md-none">
                <div className="d-flex align-items-center">
                  <a href="#" target="_blank">
                    <Github fill="#80339b" />
                  </a>
                  <a href="#" target="_blank">
                    <Discord fill="#80339b" />
                  </a>
                  <a href="#" target="_blank">
                    <Telegram fill="#80339b" />
                  </a>
                  <a href="#" target="_blank">
                    <Twitter fill="#80339b" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="py-4 py-md-5 my-2 my-md-0"></div>
    </>
  );
};

export default Navbar;
