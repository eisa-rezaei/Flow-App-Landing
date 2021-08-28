import styled, { keyframes } from "styled-components";

const route = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg); 
    }
`;
const routeRevers = keyframes`
    from {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(0deg); 
    }
`;

export const StyledPricingPageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding: 20vh 0;
  & p {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    & p {
      font-size: 1.2rem;
    }
  }
`;

export const StyledPricingPageLogoConatainer = styled.div`
  width: 150px;
  margin: 20px auto;
  position: relative;
  font-size: 4rem;
  & svg:first-child {
    animation: ${route} 3s linear infinite;
  }
  & svg:last-child {
    color: orange;
    font-size: 3rem;
    position: absolute;
    top: 48px;
    right: -5px;
    animation: ${routeRevers} 3s linear infinite;
  }
`;
