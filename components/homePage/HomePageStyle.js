import styled from "styled-components";

//pageContainer
export const StyledHomePageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`;
export const StyledHomePageContent = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StyledHomePageContentDetail = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  padding-left: 5vw;
  & h2 {
    font-style: 4rem;
    margin: 25px 0;
  }
  & p {
    font-size: 0.8rem;
    margin-bottom: 25px;
  }
`;
export const StyledHomePageContentDetailP = styled.p`
  width: ${(props) => props.width};
  padding: 10px;
  color: ${(props) => props.color};
  border-radius: 40px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  & span {
    font-size: 1.2rem;
  }
`;
export const StyledHomePageContentDetailTitle = styled.h1`
  margin: 20px 0;
  font-size: 4rem;
  font-weight: bold;
  line-height: 5.5rem;
  & span {
    color: orange;
  }
`;
export const StyledHomePageContentDetailInput = styled.div`
  width: 75%;
  height: 60px;
  margin: 2vw;
  display: flex;
  padding: 20px 5px;
  align-items: center;
  border-radius: 30px;
  background-color: #fff;
  & input {
    width: 70%;
    height: 50px;
    padding-left: 15px;
    border-radius: 30px;
  }
  & button {
    width: 7.5vw;
    height: 50px;
    color: #fff;
    border-radius: 30px;
    background-color: orange;
    cursor: pointer;
  }
`;

export const StyledHomePageContentImage = styled.div`
  width: 65%;
  display: flex;
  position: relative;
  box-shadow: 0px 0px 100px 100px #f7f9fd inset;
  background: rgb(219, 224, 252);
  background: linear-gradient(
    146deg,
    rgba(219, 224, 252, 1) 20%,
    rgba(247, 230, 189, 1) 51%,
    rgba(237, 205, 252, 1) 80%
  );
  & span {
    width: 450px;
    height: 450px;
    background-color: seagreen;
    top: 150px;
    left: 250px;
    position: absolute;
    background-color: #ffffff60;
    border-radius: 80px;
    transform: rotate(35deg);
  }
`;

export const StyledHomePageSecoundPartImage = styled.div`
  width: 65%;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: -130px;
  position: relative;
  box-shadow: 0px 0px 100px 100px #f7f9fd inset;
  background: rgb(219, 224, 252);
  background: linear-gradient(
    146deg,
    rgba(219, 224, 252, 1) 20%,
    rgba(247, 230, 189, 1) 51%,
    rgba(237, 205, 252, 1) 80%
  );
  & span {
    width: 450px;
    height: 450px;
    top: 200px;
    left: 250px;
    position: absolute;
    background-color: #ffffff60;
    border-radius: 100px;
    transform: rotate(75deg);
  }
`;
export const StyledHomePageSecoundPartApps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  & h5 {
    width: 17vw;
    color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    & svg {
      font-size: 1rem;
    }
  }
  & span {
    margin: 25px 0;
    & svg {
      width: 50px;
      height: 50px;
      padding: 10px;
      background-color: #fff;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;
export const StyledHomePageSecoundPartButton = styled.button`
  width: 10vw;
  height: 50px;
  color: #ea8d33;
  border-radius: 30px;
  background-color: #f8ecd9;
  border-radius: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;
