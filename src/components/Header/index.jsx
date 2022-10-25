import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  Container,
  LandscapeLink,
  NavContainer,
  PortfolioLink,
  PortraitLink,
  PortraitNav
} from "./style";

export default function Header() {
  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <header className="bg-dark text-light">
      <Container>
        <NavContainer>
          <PortfolioLink to="/">Portfolio</PortfolioLink>
          <nav className="portrait:hidden">
            <LandscapeLink to="/projects">Projects</LandscapeLink>
            <LandscapeLink to="/contact">Contact</LandscapeLink>
          </nav>
          <nav className="landscape:hidden">
            <IconContext.Provider value={{ size: "2.5em" }}>
              <button onClick={handleToggle}>
                {isActive ? <MdClose className="animate-rotate" /> : <MdMenu className="animate-rotate" />}
              </button>
            </IconContext.Provider>
          </nav>
        </NavContainer>

        {isActive && (
          <PortraitNav>
            <PortraitLink to="/projects">Projects</PortraitLink>
            <PortraitLink to="/contact">Contact</PortraitLink>
          </PortraitNav>
        )}
      </Container>
    </header>
  )
}