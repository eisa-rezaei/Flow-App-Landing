import { useRouter } from "next/router";
import { BsPlus } from "react-icons/bs";
import {
  StyledNavBarContainer,
  StyledNavBarLinks,
  StyledNavBarLogin,
} from "./NavBarStyles";

const NavBar = () => {
  const router = useRouter();
  const route = router.query.page;
  const navChangeBgHandler = {
    home: "1",
    usecases: "2",
    pricing: "3",
  };
  const navLinkBg = navChangeBgHandler[route] || "1";

  const navLinkHandler = (e) => {
    const href = e.target.innerText.toLowerCase();
    router.push(`/?page=${href}`);
  };
  return (
    <StyledNavBarContainer>
      <h1 onClick={navLinkHandler}>
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
      <StyledNavBarLinks navChangeBg={navLinkBg}>
        <span onClick={navLinkHandler}>Discover</span>
        <span onClick={navLinkHandler}>UseCases</span>
        <span onClick={navLinkHandler}>Pricing</span>
      </StyledNavBarLinks>
      <StyledNavBarLogin>
        <span onClick={navLinkHandler}>
          Create <BsPlus />
        </span>
        <span onClick={navLinkHandler}>SignIn</span>
      </StyledNavBarLogin>
    </StyledNavBarContainer>
  );
};

export default NavBar;
