import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  text: string;
  href: string;
};

const styles: CSSProperties = {
  color: "#00070f3",
  textDecoration: "underline",
};

const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? styles : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
