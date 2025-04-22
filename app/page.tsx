import About from "@/components/sections/About";
import BlurContainer from "@/components/BlurContainer";
import Contact from "@/components/sections/Contact";
import CoverImage from "@/components/CoverImage";
import Intro from "@/components/sections/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";
import RegularText from "@/components/RegularText";
import Socials from "@/components/sections/Socials";
import st from "@/styles/Home.module.scss";

const Home = () => {
  return (
    <div className={st["home"]}>
      <div className={st["home__background"]}>
        <CoverImage src="/background.jpg" />
      </div>

      <div className={st["home__blur-container"]}>
        <BlurContainer>
          <div className={st["home__content-container"]}>
            <header>
              <Navbar />

              <Intro />
            </header>

            <main>
              <About />

              <Projects />

              <Contact />

              <Socials />
            </main>
          </div>
        </BlurContainer>

        <footer className={st["home__footer"]}>
          <BlurContainer>
            <div className={st["home__footer-text"]}>
              <RegularText>Designed And Developed By real-farshad</RegularText>
            </div>
          </BlurContainer>
        </footer>
      </div>
    </div>
  );
};

export default Home;
