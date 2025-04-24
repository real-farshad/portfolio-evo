import ProjectsIntro from "../ProjectsIntro";
import st from "./Projects.module.scss";

import Troweb from "../projects/Troweb";
import Wallpapers from "../projects/Wallpapers";
import Queries from "../projects/Queries";

const Projects = () => {
  return (
    <div className={st["projects"]} id="projects">
      <div className={st["projects__intro"]}>
        <ProjectsIntro />
      </div>

      <div>
        <div className={st["projects__project--first"]}>
          <Troweb />
        </div>

        <div className={st["projects__project--second"]}>
          <Wallpapers />
        </div>

        <div>
          <Queries />
        </div>
      </div>
    </div>
  );
};

export default Projects;
