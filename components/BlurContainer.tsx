import { ReactNode } from "react";
import st from "@/styles/BlurContainer.module.scss";

interface BlurContainerProps {
  children: ReactNode;
}

const BlurContainer = ({ children }: BlurContainerProps) => {
  return <div className={st["blur-container"]}>{children}</div>;
};

export default BlurContainer;
