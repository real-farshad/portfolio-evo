import { calculateAge } from "@/utils/calculateAge";
import RegularText from "../RegularText";
import PrimaryTitle from "../PrimaryTitle";
import SecondaryTitle from "../SecondaryTitle";
import st from "@/styles/About.module.scss";

const About = () => {
  const birthDate = "1999-04-25";
  const age = calculateAge(birthDate);

  return (
    <div className={st["about"]} id="about">
      <div className={st["about__titles"]}>
        <div className={st["about__primary-title"]}>
          <PrimaryTitle>ABOUT ME</PrimaryTitle>
        </div>
        <SecondaryTitle>Things That You Might Be Interested In!</SecondaryTitle>
      </div>

      <div className={st["about__image-container"]}>
        <img src="/dragon.png" />
      </div>

      <div className={st["about__text"]}>
        <div>
          <RegularText>
            {`I'm A ${age} Years Old Full-Stack Web Developer.`}{" "}
            <br className={st["about__break"]} />
            {`I Love Programming, Solving Problems And Learning`}{" "}
            <br className={st["about__break"]} />
            {`New Things. I've Been Coding For 5 Years And`}{" "}
            <br className={st["about__break"]} />
            {`Have Worked On Many Different Projects,`}{" "}
            <br className={st["about__break"]} />
            {`Mostly Web Applications.`}
          </RegularText>
        </div>

        <div className={st["about__skills"]}>
          <RegularText>Some Of My Skills Are:</RegularText>
          <RegularText>
            Html, Css, Sass, Javascript, Typescript, Python And C
          </RegularText>
          <RegularText>
            Next, Remix, GraphQL, Storybook, Styled-Components, React Query,
            Node, Express, Nest, Mongodb, PostgreSQL, Passport, Jest, React
            Testing Library, Supertest
          </RegularText>
          <RegularText>Linux, Vscode, Git, Github</RegularText>
        </div>

        <div className={st["about__more"]}>
          <RegularText>
            I'm Also Interested In: Trending Technologies,{" "}
            <br className={st["about__break"]} />
            UX And UI Design, Graphic Design, 3D Modeling, Etc.
          </RegularText>
          <RegularText>I Currently Live In Kermanshah, Iran.</RegularText>
          <RegularText>And I Can Speak Both English And Farsi.</RegularText>
        </div>
      </div>
    </div>
  );
};

export default About;
