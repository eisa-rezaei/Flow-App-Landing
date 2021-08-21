import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import {
  StyledNavBarContainer,
  StyledNavBarLinks,
  StyledNavBarLogin,
} from "./NavBarStyles";
import LinkHelper from "../LinkHelper";

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <h1>icon</h1>
      <StyledNavBarLinks>
        <LinkHelper href="/">discover</LinkHelper>
        <LinkHelper href="/use-cases">use cases</LinkHelper>
        <LinkHelper href="/pricing">pricing</LinkHelper>
      </StyledNavBarLinks>
      <StyledNavBarLogin>
        <LinkHelper href="/create-account">
          <span>
            create <BsPlus />
          </span>
        </LinkHelper>
        <LinkHelper href="/sign-in">sign in</LinkHelper>
      </StyledNavBarLogin>
    </StyledNavBarContainer>
  );
};

export default NavBar;
