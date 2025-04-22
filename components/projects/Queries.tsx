import ProjectTitle from "../ProjectTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import st from "@/styles/SingleProject.module.scss";

const Queries = () => {
  return (
    <div>
      <div className={st["single-project__primary-info"]}>
        <div className={st["single-project__date"]}>
          <RegularText>May 2025</RegularText>
        </div>

        <div className={st["single-project__project-title"]}>
          <ProjectTitle>Queries Full-Stack Web Application</ProjectTitle>
        </div>
      </div>

      <div className={st["single-project__image-container"]}>
        <img src="/query.jpg" />
      </div>

      <div className={st["single-project__secondary-info"]}>
        <div className={st["single-project__links"]}>
          <div>
            <RegularLink to="https://github.com/real-farshad/queries-web-application">
              Github Repository
            </RegularLink>
          </div>

          <div>
            <RegularLink to="https://queries-web-application.onrender.com">
              Live Demo
            </RegularLink>
          </div>
        </div>

        <div className={st["single-project__text"]}>
          <div>
            <RegularText>
              Front-End Was Built Using Typescript, React, Redux, Sass And Jest.
            </RegularText>

            <RegularText>
              Back-End Was Built Using Typescript, Node.Js, Express, Joi And
              Mongodb Nodejs Driver.
            </RegularText>
          </div>

          <div className={st["single-project__description"]}>
            <RegularText>
              For This Project My Goal Was To Learn More About The MERN Stack
              And Implement Crud Operations. I Also Learned Quite A Lot About
              Best Practices And Writing Clean Code. In Front-End I Used Redux
              To Manage My State And Jest To Do Unit And Integration Tests For
              Certain Components.
            </RegularText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
