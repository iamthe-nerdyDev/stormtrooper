import { ReactNode } from "react";
import "./Container.css";

interface Props {
  children?: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="main-container">
      <div className="border-lines">
        <hr />
        <hr />
      </div>
      {children}
    </div>
  );
};

export default Container;
