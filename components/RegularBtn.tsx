import st from "@/styles/RegularBtn.module.scss";
import { ReactNode } from "react";

interface RegularBtnProps {
  children: ReactNode;
}

const RegularBtn = ({ children }: RegularBtnProps) => {
  return <button className={st["regular-btn"]}>{children}</button>;
};

export default RegularBtn;
