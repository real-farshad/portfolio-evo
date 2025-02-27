import { ReactNode } from "react";
import st from "@/styles/ProjectTitle.module.scss";

interface ProjectTitleProps {
  children: ReactNode;
}

const ProjectTitle = ({ children }: ProjectTitleProps) => {
  return <h1 className={st["project-title"]}>{children}</h1>;
};

export default ProjectTitle;
