import { Navbar } from "..";
import { IContainer } from "../../interface";
import "./Container.css";

const Container = ({ children }: IContainer) => {
  return (
    <main>
      <Navbar />
      <div className="overlay"></div>
      <div className="border-lines">
        <hr />
        <hr />
      </div>
      <div className="wrapper">
        <div className="parallax">
          <div className="xy">
            <div className="contanier-st">
              <img className="hero-gif" src="/hero.gif" alt="hero" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Container;
