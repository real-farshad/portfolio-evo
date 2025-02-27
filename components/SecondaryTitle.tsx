import { ReactNode } from "react";
import st from "@/styles/SecondaryTitle.module.scss";

interface SecondaryTitleProps {
  children: ReactNode;
}

const SecondaryTitle = ({ children }: SecondaryTitleProps) => {
  return <div className={st["secondary-title"]}>{children}</div>;
};

export default SecondaryTitle;
