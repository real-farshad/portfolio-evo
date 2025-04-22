import ProjectTitle from "../ProjectTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import st from "@/styles/SingleProject.module.scss";

const Wallpapers = () => {
  return (
    <div>
      <div className={st["single-project__primary-info"]}>
        <div className={st["single-project__date"]}>
          <RegularText>March 2024</RegularText>
        </div>

        <div className={st["single-project__project-title"]}>
          <ProjectTitle>Full-Stack Wallpapers Web Application</ProjectTitle>
        </div>
      </div>

      <div className={st["single-project__image-container"]}>
        <img src="/wallpapers.jpg" />
      </div>

      <div className={st["single-project__secondary-info"]}>
        <div className={st["single-project__links"]}>
          <div>
            <RegularLink to="https://github.com/real-farshad/wallpapers-web-application">
              Github Repository
            </RegularLink>
          </div>

          <div>
            <RegularLink to="https://wallpapers-web-application.onrender.com">
              Live Demo
            </RegularLink>
          </div>
        </div>

        <div className={st["single-project__text"]}>
          <div>
            <RegularText>
              Front-End Was Built Using Typescript, React React Router, Context,
              Sass.
            </RegularText>
            <RegularText>
              Back-End Was Built Using Javascript, Node.Js, Express, Mongodb
              Nodejs Driver, Passport, Sessions, Joi, Bcrypt, Dotenv And Jest.
            </RegularText>
          </div>

          <div className={st["single-project__description"]}>
            <RegularText>
              My Main Focus When Building This Project Was Implementing
              Authentication, And Popular Features Such As Saving, Liking And
              Commenting On A Post In Full-Stack. I Also Learned A Lot About
              Different Architectures For Back-End And Tried To Adapt Some
              Principles From Clean Architecture.
            </RegularText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallpapers;
