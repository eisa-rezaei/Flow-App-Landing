import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";
import {
  StyledNavBarContainer,
  StyledNavBarLinks,
  StyledNavBarLogin,
} from "./NavBarStyles";
import LinkHelper from "../LinkHelper";

const NavBar = () => {
  const router = useRouter();
  const navChangeBgHandler = () => {
    const route = router.route;
    if (route === "/") {
      return "1";
    }
    if (route === "/page=use-cases") {
      return "2";
    }
    if (route === "/page=pricing") {
      return "3";
    }
  };

  return (
    <StyledNavBarContainer>
      <h1>
        flow
        <span
          style={{
            color: "#fff",
            backgroundColor: "orange",
            borderRadius: "10px",
            fontSize: "1.2rem",
          }}
        >
          App
        </span>
      </h1>
      <StyledNavBarLinks navChangeBg={navChangeBgHandler}>
        <LinkHelper href="/">discover</LinkHelper>
        <LinkHelper href="use-cases">use cases</LinkHelper>
        <LinkHelper href="pricing">pricing</LinkHelper>
      </StyledNavBarLinks>
      <StyledNavBarLogin>
        <LinkHelper href="create-account">
          <span>
            create <BsPlus />
          </span>
        </LinkHelper>
        <LinkHelper href="sign-in">sign in</LinkHelper>
      </StyledNavBarLogin>
    </StyledNavBarContainer>
  );
};

export default NavBar;
