import BreakLineXL from "../BreakLineXL";
import PrimaryTitle from "../PrimaryTitle";
import RegularLink from "../RegularLink";
import RegularText from "../RegularText";
import SecondaryTitle from "../SecondaryTitle";
import st from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={st["contact"]} id="contact">
      <div className={st["contact__image"]}>
        <img src="/ghost.png" />
      </div>

      <div className={st["contact__text"]}>
        <div className={st["contact__titles"]}>
          <PrimaryTitle>CONTACT ME</PrimaryTitle>

          <div className={st["contact__secondary-title"]}>
            <SecondaryTitle>{`I Promise I'll Respond As Soon As I Can`}</SecondaryTitle>
          </div>
        </div>

        <div>
          <RegularText>
            If You Have Any Other Questions About Me Or There's <BreakLineXL />
            Something You Want To Talk To Me About Feel <BreakLineXL />
            Free To Get In Touch.
          </RegularText>

          <RegularText>My Phone Number: (+98) 09027553035</RegularText>

          <RegularText>
            My Email Address:{" "}
            <RegularLink to="mailto:farshad.dev.contact@gmail.com">
              farshad.dev.contact@gmail.com
            </RegularLink>
          </RegularText>
        </div>
      </div>
    </div>
  );
};

export default Contact;
