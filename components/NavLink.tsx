import { ReactNode } from "react";
import st from "@/styles/NavLink.module.scss";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink = (props: NavLinkProps) => {
  const { to, children } = props;

  return (
    <a className={st["nav-link"]} href={to}>
      {children}
    </a>
  );
};

export default NavLink;
