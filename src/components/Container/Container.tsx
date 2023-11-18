import { Navbar } from "..";
import { IContainer } from "../../interface";
import "./Container.css";

const Container = ({ children }: IContainer) => {
  return (
    <main>
      <Navbar />
      <div className="overlay"></div>
      <div className="border-lines"></div>
      <div className="wrapper">{children}</div>
    </main>
  );
};

export default Container;
