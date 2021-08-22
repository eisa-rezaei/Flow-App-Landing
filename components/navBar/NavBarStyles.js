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
`;
export const StyledNavBarLinks = styled.div`
  width: 25vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 15px;
  & a {
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
    :focus {
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
`;
export const StyledNavBarLogin = styled.div`
  width: 13vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  & a,
  span {
    width: 7vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    & svg {
      font-size: 1.3rem;
    }
  }
  & a:nth-child(2) {
    width: 6vw;
    height: 40px;
    color: #fff;
    background-color: orange;
    border-radius: 30px;
  }
`;
