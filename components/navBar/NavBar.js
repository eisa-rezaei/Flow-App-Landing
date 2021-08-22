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
  const route = router.query.page;
  const navChangeBgHandler = {
    home: "1",
    usecases: "2",
    pricing: "3",
  };
  const navLinkBg = navChangeBgHandler[route] || "1";
  return (
    <StyledNavBarContainer>
      <LinkHelper href="home">
        <h1>
          flow
          <span
            style={{
              color: "#fff",
              backgroundColor: "orange",
              borderRadius: "10px",
              fontSize: "1.1rem",
              marginLeft: "5px",
              padding: "5px",
            }}
          >
            App
          </span>
        </h1>
      </LinkHelper>
      <StyledNavBarLinks navChangeBg={navLinkBg}>
        <LinkHelper href="home">Discover</LinkHelper>
        <LinkHelper href="usecases">Use cases</LinkHelper>
        <LinkHelper href="pricing">Pricing</LinkHelper>
      </StyledNavBarLinks>
      <StyledNavBarLogin>
        <LinkHelper href="createaccount">
          <span>
            Create <BsPlus />
          </span>
        </LinkHelper>
        <LinkHelper href="signin">Sign in</LinkHelper>
      </StyledNavBarLogin>
    </StyledNavBarContainer>
  );
};

export default NavBar;
