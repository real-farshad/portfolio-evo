import { ReactNode } from "react";
import st from "./RegularText.module.scss";

interface RegularTextProps {
  children: ReactNode;
}

const RegularText = ({ children }: RegularTextProps) => {
  return <p className={st["regular-text"]}>{children}</p>;
};

export default RegularText;
