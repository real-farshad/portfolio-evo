import Link from "next/link";
import st from "@/styles/Logo.module.scss";

const Logo = () => {
  return (
    <Link className={st["logo"]} href="/">
      M0hammadr3za.
    </Link>
  );
};

export default Logo;
