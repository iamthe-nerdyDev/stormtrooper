import { IContainer } from "../../interface";
import "./Container.css";

const Container = ({ children }: IContainer) => {
  return (
    <main>
      <div className="border-lines">
        <hr />
        <hr />
      </div>
      {children}
    </main>
  );
};

export default Container;
