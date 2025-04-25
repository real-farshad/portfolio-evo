import ProjectTitle from "../ProjectTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import st from "./Project.module.scss";

const Queries = () => {
  return (
    <div>
      <div className={st["project__date-title-container"]}>
        <div className={st["project__date"]}>
          <RegularText>May 2025</RegularText>
        </div>

        <div className={st["project__title"]}>
          <ProjectTitle>Queries Full-Stack Web Application</ProjectTitle>
        </div>
      </div>

      <div className={st["project__image-container"]}>
        <img className={st["project__image-large"]} src="/queries-large.jpg" />

        <img className={st["project__image-small"]} src="/queries-small.jpg" />
      </div>

      <div className={st["project__text"]}>
        <div className={st["project__links"]}>
          <RegularLink to="https://github.com/real-farshad/queries-web-application">
            Github Repository
          </RegularLink>

          <RegularLink to="https://queries-web-application.vercel.app">
            Live Demo
          </RegularLink>
        </div>

        <div className={st["project__description"]}>
          <div>
            <RegularText>
              Front-End Was Built Using Typescript, React, Redux, Sass And Jest.
            </RegularText>

            <RegularText>
              Back-End Was Built Using Typescript, Node.Js, Express, Joi And
              Mongodb Nodejs Driver.
            </RegularText>
          </div>

          <RegularText>
            For This Project My Goal Was To Learn More About The MERN Stack And
            Implement Crud Operations. I Also Learned Quite A Lot About Best
            Practices And Writing Clean Code. In Front-End I Used Redux To
            Manage My State And Jest To Do Unit And Integration Tests For
            Certain Components.
          </RegularText>
        </div>
      </div>
    </div>
  );
};

export default Queries;
