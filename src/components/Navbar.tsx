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
import { useEffect, useRef, useState } from "react";

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
  const userButtonRef = useRef<any>(null);
  const [showNavDropdown, setShowNavDropdown] = useState<boolean>(false);

  // hide dropdown globally
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        showNavDropdown &&
        userButtonRef.current &&
        !userButtonRef.current.contains(e.target)
      ) {
        setShowNavDropdown(false);
      }
    };
    if (showNavDropdown) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showNavDropdown]);
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
        <MobileNavMenu
          onClick={() => setShowNavDropdown(!showNavDropdown)}
          ref={userButtonRef}
        >
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
