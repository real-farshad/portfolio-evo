import BreakLineXL from "../BreakLineXL";
import PrimaryTitle from "../PrimaryTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import SecondaryTitle from "../SecondaryTitle";
import st from "./Socials.module.scss";

const Socials = () => {
  return (
    <div className={st["socials"]} id="socials">
      <div className={st["socials__image"]}>
        <img src="/fire.png" />
      </div>

      <div className={st["socials__text"]}>
        <div className={st["socials__titles"]}>
          <PrimaryTitle>MY SOCIALS</PrimaryTitle>

          <div className={st["socials__secondary-title"]}>
            <SecondaryTitle>{`Other Places To Find Me In`}</SecondaryTitle>
          </div>
        </div>

        <div className={st["socials__description"]}>
          <RegularText>
            Please Don't Use My Social Media To Contact Me, I <BreakLineXL />
            Probably Won't Be Able To Reply Anytime Soon. <BreakLineXL />
            However Feel Free To Take A Look At My Social Media, I{" "}
            <BreakLineXL />
            Try To Post Programming Related Content Whenever I <BreakLineXL />
            Have Some Free Time.
          </RegularText>
        </div>

        <RegularText>
          My Github:{" "}
          <RegularLink to="https://github.com/real-farshad">
            github.com/real-farshad
          </RegularLink>
        </RegularText>

        <RegularText>
          My LinkedIn:{" "}
          <RegularLink to="https://www.linkedin.com/in/real-farshad/">
            linkedin.com/in/real-farshad
          </RegularLink>
        </RegularText>
      </div>
    </div>
  );
};

export default Socials;
