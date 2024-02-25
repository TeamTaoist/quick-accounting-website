import { Logo, NavLink, NavList, NavbarContainer } from "../style/navbar.style";
import logo from "../assets/images/logo.svg";

const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Feature",
    href: "/",
  },
  {
    name: "Benefits",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        {navList.map((item) => (
          <NavLink>{item.name}</NavLink>
        ))}
        <button>Get Started</button>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
