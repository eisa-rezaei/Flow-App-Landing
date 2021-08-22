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
  const route = router.query.pages;
  const navChangeBgHandler = {
    home: "1",
    usecases: "2",
    pricing: "3",
  };
  const navLinkBg = navChangeBgHandler[route] || "1";
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
      <StyledNavBarLinks navChangeBg={navLinkBg}>
        <LinkHelper href="home">discover</LinkHelper>
        <LinkHelper href="usecases">use cases</LinkHelper>
        <LinkHelper href="pricing">pricing</LinkHelper>
      </StyledNavBarLinks>
      <StyledNavBarLogin>
        <LinkHelper href="createaccount">
          <span>
            create <BsPlus />
          </span>
        </LinkHelper>
        <LinkHelper href="signin">sign in</LinkHelper>
      </StyledNavBarLogin>
    </StyledNavBarContainer>
  );
};

export default NavBar;
