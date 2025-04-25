import BreakLineXL from "../BreakLineXL";
import PrimaryTitle from "../PrimaryTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import SecondaryTitle from "../SecondaryTitle";
import st from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={st["intro"]}>
      <div className={st["intro__image"]}>
        <img src="/intro.png" />
      </div>

      <div className={st["intro__text"]}>
        <div className={st["intro__opening"]}>
          <div className={st["intro__hello-large"]}>
            <PrimaryTitle>HELLO THERE!</PrimaryTitle>
          </div>

          <div className={st["intro__hello-small"]}>
            <div>HELLO</div>
            <div>THERE!</div>
          </div>

          <SecondaryTitle>
            My Name Is Mohammad Reza Gholami <BreakLineXL />
            My Friends Call Me Just Farshad
          </SecondaryTitle>
        </div>

        <div className={st["intro__profession"]}>
          <SecondaryTitle>
            I'm A Software Engineer And <BreakLineXL />
            This Is My Portfolio
          </SecondaryTitle>
        </div>

        <div className={st["intro__description"]}>
          <RegularText>
            I Want To Make Awesome Things Other <BreakLineXL />
            People Enjoy Using.
          </RegularText>

          <RegularText>
            I'd Love To Work In A Team And make Even More <BreakLineXL />
            Amazing Stuff While Having Fun Doing It.
          </RegularText>

          <RegularText>
            "You Only Live Once, But If You Do It Right, <BreakLineXL />
            Once Is Enough." ― Mae West
          </RegularText>
        </div>

        <RegularText>
          You Can Take A Look At My Resume(CV) Here:{" "}
          <RegularLink to="/Farshad_Resume.pdf">Download Resume</RegularLink>
        </RegularText>

        <RegularText>
          You Can Also Checkout My Projects And Programming Skills On{" "}
          <RegularLink to="https://github.com/real-farshad">
            My Github
          </RegularLink>
        </RegularText>
      </div>
    </div>
  );
};

export default Intro;
