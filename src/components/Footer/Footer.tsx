import stormtrooperLogo from "../../assets/images/logo.svg";
import { Github, Discord, Telegram, Twitter } from "../../icons";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5">
      <div className="container-st">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div className="navbar-brand d-flex align-items-center">
                <img src={stormtrooperLogo} alt="Stormtrooper Logo" />
                <h2>Stormtrooper NFT</h2>
              </div>
              <div className="socials-box py-4">
                <div className="d-flex align-items-center justify-content-center">
                  <a href="#" target="_blank">
                    <Github fill="#fff" />
                  </a>
                  <a href="#" target="_blank">
                    <Discord fill="#fff" />
                  </a>
                  <a href="#" target="_blank">
                    <Telegram fill="#fff" />
                  </a>
                  <a href="#" target="_blank">
                    <Twitter fill="#fff" />
                  </a>
                </div>
              </div>
              <p>Copyright &copy; {year}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
