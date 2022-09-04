import ActiveLink from "../ActiveLink/ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Servicios",
    href: "/servicios",
  },
  {
    text: "Contact",
    href: "/contacto",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item) => {
        return <ActiveLink key={item.href} text={item.text} href={item.href} />;
      })}
    </nav>
  );
};

export default Navbar;
