import PrimaryTitle from "./PrimaryTitle";
import SecondaryTitle from "./SecondaryTitle";
import st from "@/styles/Projects.module.scss";

import Troweb from "./projects/Troweb";
import Wallpapers from "./projects/Wallpapers";
import Queries from "./projects/Queries";

const Projects = () => {
  return (
    <div className={st["projects"]} id="projects">
      <div className={st["projects__section-titles"]}>
        <div className={st["projects__primary-title"]}>
          <PrimaryTitle>MY PROJECTS</PrimaryTitle>
        </div>
        <SecondaryTitle>Some Of My Most Recent Projects</SecondaryTitle>
      </div>

      <div className={st["projects__cards"]}>
        <div className={st["projects__single-project"]}>
          <Troweb />
        </div>

        <div className={st["projects__single-project"]}>
          <Wallpapers />
        </div>

        <div className={st["projects__single-project"]}>
          <Queries />
        </div>
      </div>
    </div>
  );
};

export default Projects;
