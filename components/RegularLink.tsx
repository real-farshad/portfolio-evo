import { ReactNode } from "react";
import st from "@/styles/RegularLink.module.scss";

interface RegularLinkProps {
  to: string;
  children: ReactNode;
}

const RegularLink = (props: RegularLinkProps) => {
  const { to, children } = props;

  return (
    <a className={st["regular-link"]} href={to}>
      {children}
    </a>
  );
};

export default RegularLink;
