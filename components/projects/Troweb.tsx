import ProjectTitle from "../ProjectTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import st from "./Project.module.scss";

const Troweb = () => {
  return (
    <div>
      <div className={st["project__date-title-container"]}>
        <div className={st["project__date"]}>
          <RegularText>2022 - 2023</RegularText>
        </div>

        <div className={st["project__title"]}>
          <ProjectTitle>Troweb - Data Visualization Platform</ProjectTitle>
        </div>
      </div>

      <div className={st["project__image"]}>
        <img src="/troweb.jpg" />
      </div>

      <div className={st["project__text"]}>
        <div className={st["project__links"]}>
          <RegularLink to="https://www.troweb.com">Troweb Platform</RegularLink>
        </div>

        <div className={st["project__description"]}>
          <div>
            <RegularText>
              Technologies I Used In This Project Include TypeScript, React,
              Remix.js, Next.js, Styled Components, Storybook, Material UI,
              GraphQL, Jotai, Yarn/NPM, Docker, WSL, GitLab CI/ CD, Figma, Jira,
              VS Code, Windows/Linux(Ubuntu).
            </RegularText>
          </div>

          <div>
            <RegularText>
              Troweb Is A Data Visualization SaaS Platform From{" "}
              <RegularLink to="https://www.linkedin.com/company/avid-technology-development">
                Avid
              </RegularLink>
              . When I Joined The Team As A Frontend Developer The Project Was
              Just Getting Started And By The Time I Left We Had Already
              Delivered The MVP Which Was An Outstanding International Success.
            </RegularText>
          </div>

          <div>
            <RegularText>
              In This Project I Worked On Building Accessible UI Components And
              Integrating Them With Remix And Next. I Also Worked On A Reusable
              Components Library Named Avidkit Which Was Used Across Many
              Different Projects In The Company.
            </RegularText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troweb;
