import {
  Logo,
  MobileNavMenu,
  Nav,
  NavLink,
  NavList,
  NavListDropdown,
  NavbarContainer,
} from "../style/navbar.style";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import { useState } from "react";

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
  const [showNavDropdown, setShowNavDropdown] = useState<boolean>(false);
  return (
    <NavbarContainer>
      <Nav>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <NavList>
          {navList.map((item) => (
            <NavLink>{item.name}</NavLink>
          ))}
          <button>Get Started</button>
        </NavList>
        <MobileNavMenu onClick={() => setShowNavDropdown(!showNavDropdown)}>
          <img src={menu} alt="" />
        </MobileNavMenu>
      </Nav>
      {showNavDropdown && (
        <NavListDropdown>
          {navList.map((item) => (
            <p>{item.name}</p>
          ))}
        </NavListDropdown>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
