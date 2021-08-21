import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import {
  StyledNavBarContainer,
  StyledNavBarLinks,
  StyledNavBarLogin,
} from "./NavBarStyles";

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <h1>icon</h1>
      <StyledNavBarLinks>
        <Link href="/">discover</Link>
        <Link href="/use-cases">use cases</Link>
        <Link href="/pricing">pricing</Link>
      </StyledNavBarLinks>
      <StyledNavBarLogin>
        <Link href="/create-account">
          <span>
            create <BsPlus />
          </span>
        </Link>
        <Link href="/sign-in">sign in</Link>
      </StyledNavBarLogin>
    </StyledNavBarContainer>
  );
};

export default NavBar;
