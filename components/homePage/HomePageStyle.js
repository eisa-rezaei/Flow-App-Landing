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
  overflow: hidden;
  @media (max-width: 600px) {
    width: 100vw;
    flex-direction: column-reverse;
    justify-content: left;
    align-items: left;
  }
`;
export const StyledHomePageContentDetail = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  padding-left: 5vw;
  & h2 {
    font-size: 1.8rem;
    margin: 25px 0;
  }
  & p {
    font-size: 0.8rem;
    margin-bottom: 25px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
    padding-left: 2vw;
    & h2 {
      font-size: 2rem;
    }
  }
`;
export const StyledHomePageContentDetailP = styled.p`
  width: 12.5vw;
  padding: 10px;
  color: #ea8d33;
  display: flex;
  font-size: 0.8rem;
  border-radius: 40px;
  align-items: center;
  background-color: #f8ecd9;
  justify-content: space-evenly;
  & span {
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    width: 35vw;
  }
`;
export const StyledHomePageContentDetailparagraph = styled.p`
  width: 100%;
  padding: 10px;
  color: #72727d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.8rem;
  & span {
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    width: 80vw;
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
  @media (max-width: 600px) {
    font-size: 3rem;
    line-height: 3rem;
    padding: 0 10px;
  }
`;
export const StyledHomePageContentDetailInput = styled.div`
  width: 75%;
  height: 60px;
  margin: 2vw;
  display: flex;
  padding: 20px 5px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #fff;
  & input {
    width: 70%;
    height: 50px;
    padding-left: 15px;
    border-radius: 30px;
  }
  & button {
    width: 100px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 0px 100px 100px #f7f9fd inset;
  background: rgb(219, 224, 252);
  background: linear-gradient(
    146deg,
    rgba(219, 224, 252, 1) 20%,
    rgba(247, 230, 189, 1) 51%,
    rgba(237, 205, 252, 1) 80%
  );
  & img {
    width: 850px;
    height: 680px;
    z-index: 2;
  }
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
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    & img {
      width: max-content;
      height: 400px;
    }
    & span {
      width: 300px;
      height: 300px;
      top: 60px;
      left: 0;
    }
  }
`;

export const StyledHomePageSecoundPartImage = styled.div`
  width: 65%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -130px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 100px 100px #f7f9fd inset;
  background: rgb(219, 224, 252);
  background: linear-gradient(
    146deg,
    rgba(219, 224, 252, 1) 20%,
    rgba(247, 230, 189, 1) 51%,
    rgba(237, 205, 252, 1) 80%
  );
  & img {
    width: 1000px;
    height: 750px;
    z-index: 2;
  }
  & span {
    width: 450px;
    height: 450px;
    top: 300px;
    left: 230px;
    position: absolute;
    background-color: #ffffff60;
    border-radius: 100px;
    transform: rotate(75deg);
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0px;
    & img {
      width: max-content;
      height: 500px;
    }
    & span {
      width: 300px;
      height: 300px;
      top: 200px;
      left: 80px;
    }
  }
`;
export const StyledHomePageSecoundPartApps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
  & h5 {
    width: 250px;
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
  @media (max-width: 600px) {
    & span {
      width: 350px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
export const StyledHomePageSecoundPartButton = styled.button`
  width: 150px;
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
  @media (max-width: 600px) {
    width: 200px;
  }
`;
export const StyledHomePageSecoundPartBg = styled.span`
  width: 300px;
  height: 300px;
  bottom: -340px;
  right: -240px;
  transform: rotate(-15deg);
  border-radius: 80px;
  position: absolute;
  background-color: #fdf1f0;
`;
