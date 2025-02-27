import { ReactNode } from "react";
import st from "@/styles/PrimaryTitle.module.scss";

interface PrimaryTitleProps {
  children: ReactNode;
}

const PrimaryTitle = ({ children }: PrimaryTitleProps) => {
  return <div className={st["primary-title"]}>{children}</div>;
};

export default PrimaryTitle;
