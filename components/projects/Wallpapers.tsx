import ProjectTitle from "../ProjectTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import st from "./Project.module.scss";

const Wallpapers = () => {
  return (
    <div>
      <div className={st["project__date-title-container"]}>
        <div className={st["project__date"]}>
          <RegularText>March 2024</RegularText>
        </div>

        <div className={st["project__title"]}>
          <ProjectTitle>Wallpapers Full-Stack Web Application</ProjectTitle>
        </div>
      </div>

      <div className={st["project__image-container"]}>
        <img
          className={st["project__image-large"]}
          src="/projects/wallpapers-large.jpg"
        />

        <img
          className={st["project__image-small"]}
          src="/projects/wallpapers-small.jpg"
        />
      </div>

      <div className={st["project__text"]}>
        <div className={st["project__links"]}>
          <RegularLink to="https://github.com/real-farshad/wallpapers-web-application">
            Github Repository
          </RegularLink>

          <RegularLink to="https://wallpapers-web-application.vercel.app">
            Live Demo
          </RegularLink>
        </div>

        <div className={st["project__description"]}>
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
  );
};

export default Wallpapers;
