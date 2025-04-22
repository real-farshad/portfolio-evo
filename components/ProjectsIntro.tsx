import st from "@/styles/ProjectsIntro.module.scss";
import RegularText from "./RegularText";
import PrimaryTitle from "./PrimaryTitle";
import SecondaryTitle from "./SecondaryTitle";
import RegularLink from "./RegularLink";

const ProjectsIntro = () => {
  return (
    <div className={st["projects-intro"]}>
      <div className={st["projects-intro__image"]}>
        <img src="/projects-intro-image.png" />
      </div>

      <div className={st["projects-intro__info"]}>
        <div className={st["projects-intro__primary-info"]}>
          <PrimaryTitle>MY PROJECTS</PrimaryTitle>

          <SecondaryTitle>Some Of My Best, Recent Projects</SecondaryTitle>
        </div>

        <div className={st["projects-intro__text--first"]}>
          <RegularText>
            I Had A Lot Of Fun Working On These Projects. In Building Each One
            Of Them, I Tried To Use Modern And Industry-Leading Tools. <br />
            From The Very Beginning, I Did A Lot Of Research And Practice To
            Make Sure That I Write Clean Code And Structure My Projects For
            Reliability And Maintenance.
          </RegularText>
        </div>

        <div className={st["projects-intro__text--second"]}>
          <RegularText>
            User Experience Is Another Priority In My Work. I Always Try To
            Implement Features With An, Intuitive And Easy To Use, Approach.
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
  );
};

export default ProjectsIntro;
