import { calculateAge } from "@/utils/calculateAge";
import RegularText from "../RegularText";
import PrimaryTitle from "../PrimaryTitle";
import SecondaryTitle from "../SecondaryTitle";
import BreakLineXL from "../BreakLineXL";
import st from "./About.module.scss";

const About = () => {
  const birthDate = "1999-04-25";
  const age = calculateAge(birthDate);

  return (
    <div className={st["about"]} id="about">
      <div className={st["about__image"]}>
        <img src="/dragon.png" />
      </div>

      <div className={st["about__text"]}>
        <div className={st["about__titles"]}>
          <PrimaryTitle>ABOUT ME</PrimaryTitle>

          <SecondaryTitle>
            Things That You Might Be Interested In!
          </SecondaryTitle>
        </div>

        <div>
          <RegularText>
            I'm A {age} Years Old Full-Stack Web Developer. <BreakLineXL />I
            Love Programming, Solving Problems And Learning <BreakLineXL />
            New Things. I've Been Coding For 5 Years And <BreakLineXL />
            Have Worked On Many Different Projects, <BreakLineXL />
            Mostly Web Applications.
          </RegularText>
        </div>

        <div>
          <RegularText>Some Of My Skills Are:</RegularText>

          <RegularText>
            Html, Css, Sass, Javascript, Typescript, Python And C
          </RegularText>

          <RegularText>
            Next, Remix, GraphQL, Storybook, Styled-Components, React{" "}
            <BreakLineXL />
            Query, Node, Express, Nest, Mongodb, PostgreSQL, Passport,{" "}
            <BreakLineXL />
            Jest, React Testing Library, Supertest
          </RegularText>

          <RegularText>Linux, Vscode, Git, Github</RegularText>
        </div>

        <div>
          <RegularText>
            I'm Also Interested In: Trending Technologies, <BreakLineXL />
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
