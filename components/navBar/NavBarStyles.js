import styled from "styled-components";

export const StyledNavBarContainer = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: #f7f9fd;
  & span {
    cursor: pointer;
  }
`;
export const StyledNavBarLogo = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: none;
  & span {
    color: #fff;
    background-color: orange;
    border-radius: 10px;
    font-size: 1.1rem;
    margin-left: 5px;
    padding: 5px;
  }
`;

export const StyledNavBarLinks = styled.div`
  width: 25vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 15px;
  & span {
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #72727d;
    :nth-child(${(props) => props.navChangeBg}) {
      font-weight: 600;
      color: #0c0338;
      ::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: orange;
      }
    }
  }
  @media (max-width: 600px) {
    & span {
      display: none;
    }
  }
`;
export const StyledNavBarIcons = styled.div`
  width: 40vw;
  height: 70px;
  padding-top: 15px;
  display: none;
  & span:nth-child(${(props) => props.navChangeBg}) {
    color: orange;
  }
  & span {
    font-size: 1.3rem;
    color: #72727d;
    display: flex;
    flex-direction: column;
    :hover {
      ::after {
        content: "";
        width: inherit;
        height: 2px;
        background-color: orange;
      }
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
`;

export const StyledNavBarLogin = styled.div`
  width: 13vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  & span {
    width: 7vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & svg {
      font-size: 1.3rem;
    }
  }
  & span:nth-child(2) {
    width: 6vw;
    height: 40px;
    color: #fff;
    background-color: orange;
    border-radius: 30px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
