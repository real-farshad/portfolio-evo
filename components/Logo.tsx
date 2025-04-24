import Link from "next/link";
import st from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link className={st["logo"]} href="/">
      Real-Farshad.
    </Link>
  );
};

export default Logo;
