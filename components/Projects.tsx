import ProjectsIntro from "./ProjectsIntro";
import st from "@/styles/Projects.module.scss";

import Troweb from "./projects/Troweb";
import Wallpapers from "./projects/Wallpapers";
import Queries from "./projects/Queries";

const Projects = () => {
  return (
    <div className={st["projects"]} id="projects">
      <div className={st["projects__intro"]}>
        <ProjectsIntro />
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
