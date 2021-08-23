import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { CgDollar } from "react-icons/cg";

import {
  StyledNavBarContainer,
  StyledNavBarIcons,
  StyledNavBarLinks,
  StyledNavBarLogin,
  StyledNavBarLogo,
} from "./NavBarStyles";
import { GoBriefcase } from "react-icons/go";

const NavBar = () => {
  const router = useRouter();
  const route = router.query.page;
  const navChangeBgHandler = {
    home: "1",
    usecases: "2",
    pricing: "3",
  };
  const navLinkBg = navChangeBgHandler[route] || "1";

  const navLinkHandler = (page) => () => {
    router.push(`/?page=${page}`);
  };
  return (
    <StyledNavBarContainer>
      <StyledNavBarLogo onClick={navLinkHandler("home")}>
        flow
        <span>App</span>
      </StyledNavBarLogo>
      <StyledNavBarLinks navChangeBg={navLinkBg}>
        <span onClick={navLinkHandler("home")}>Discover</span>
        <span onClick={navLinkHandler("usecases")}>UseCases</span>
        <span onClick={navLinkHandler("pricing")}>Pricing</span>
      </StyledNavBarLinks>
      <StyledNavBarIcons navChangeBg={navLinkBg}>
        <span onClick={navLinkHandler("home")}>
          <ImHome />
        </span>
        <span onClick={navLinkHandler("usecases")}>
          <GoBriefcase />
        </span>
        <span onClick={navLinkHandler("pricing")}>
          <CgDollar />
        </span>
      </StyledNavBarIcons>
      <StyledNavBarLogin>
        <span onClick={navLinkHandler("createacount")}>
          Create <BsPlus />
        </span>
        <span onClick={navLinkHandler("signin")}>SignIn</span>
      </StyledNavBarLogin>
    </StyledNavBarContainer>
  );
};

export default NavBar;
