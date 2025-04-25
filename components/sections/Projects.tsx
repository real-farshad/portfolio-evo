import PrimaryTitle from "../PrimaryTitle";
import SecondaryTitle from "../SecondaryTitle";
import RegularText from "../RegularText";
import BreakLineXL from "../BreakLineXL";
import RegularLink from "../RegularLink";
import st from "./Projects.module.scss";

import Troweb from "../projects/Troweb";
import Wallpapers from "../projects/Wallpapers";
import Queries from "../projects/Queries";

const Projects = () => {
  return (
    <div className={st["projects"]} id="projects">
      <div className={st["projects__intro"]}>
        <div className={st["projects__image"]}>
          <img src="/projects-intro-image.png" />
        </div>

        <div className={st["projects__text"]}>
          <div className={st["projects__titles"]}>
            <PrimaryTitle>MY PROJECTS</PrimaryTitle>

            <div className={st["projects__secondary-title"]}>
              <SecondaryTitle>Some Of My Best, Recent Projects</SecondaryTitle>
            </div>
          </div>

          <div className={st["projects__description"]}>
            <RegularText>
              I Had A Lot Of Fun Working On These Projects. In <BreakLineXL />
              Building Each One Of Them, I Tried To Use <BreakLineXL />
              Modern And Industry-Leading Tools. <BreakLineXL />
              From The Very Beginning, I Did A Lot Of Research <BreakLineXL />
              And Practice To Make Sure That I Write Clean <BreakLineXL />
              Code And Structure My Projects For Reliability <BreakLineXL />
              And Maintenance.
            </RegularText>
          </div>

          <div>
            <RegularText>
              User Experience Is Another Priority In My Work. I <BreakLineXL />
              Always Try To Implement Features With An, <BreakLineXL />
              Intuitive And Easy To Use, Approach.
            </RegularText>

            <RegularText>
              You Can Also Checkout My Projects On{" "}
              <RegularLink to="https://github.com/real-farshad">
                My Github
              </RegularLink>
              .
            </RegularText>
          </div>
        </div>
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
