import { AiOutlineRightCircle, AiOutlineVerticalLeft } from "react-icons/ai";
import { FaFigma, FaPlay } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";

import {
  StyledHomePageContainer,
  StyledHomePageContent,
  StyledHomePageContentDetail,
  StyledHomePageContentDetailInput,
  StyledHomePageContentDetailP,
  StyledHomePageContentDetailparagraph,
  StyledHomePageContentDetailTitle,
  StyledHomePageContentImage,
  StyledHomePageSecoundPartApps,
  StyledHomePageSecoundPartBg,
  StyledHomePageSecoundPartButton,
  StyledHomePageSecoundPartImage,
} from "./HomePageStyle";

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <StyledHomePageContent>
        <StyledHomePageContentDetail>
          <StyledHomePageContentDetailP>
            <span>🔥</span> soft lunch 2.0
          </StyledHomePageContentDetailP>
          <StyledHomePageContentDetailTitle>
            let your creativity flow <span>.</span>
          </StyledHomePageContentDetailTitle>
          <StyledHomePageContentDetailparagraph>
            Collect user feedback,design persons brianstorm,design customer
            journeys and much more .
          </StyledHomePageContentDetailparagraph>
          <StyledHomePageContentDetailInput>
            <input placeholder="Your email" /> <button>get started</button>
          </StyledHomePageContentDetailInput>
        </StyledHomePageContentDetail>
        <StyledHomePageContentImage>
          <span />
          <img src="./assets/bg-img-1.png" alt="flow" />
        </StyledHomePageContentImage>
      </StyledHomePageContent>
      <StyledHomePageContent>
        <StyledHomePageSecoundPartImage>
          <span />
          <img src="./assets/bg-img-2.png" alt="flow" />
        </StyledHomePageSecoundPartImage>
        <StyledHomePageContentDetail>
          <h2>
            test your interfacec <span style={{ color: "orange" }}>.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum vel
            nulla quaerat excepturi expedita perferendis nam dolorum ipsam
            minima?
          </p>
          <StyledHomePageSecoundPartApps>
            <h5>
              all aps and intergrations <AiOutlineRightCircle />
            </h5>
            <span>
              <FaFigma />
              <GiCutDiamond />
              <AiOutlineVerticalLeft />
              <GrReactjs />
            </span>
            <StyledHomePageSecoundPartButton>
              <FaPlay />
              watch a demo
            </StyledHomePageSecoundPartButton>
            <StyledHomePageSecoundPartBg />
          </StyledHomePageSecoundPartApps>
        </StyledHomePageContentDetail>
      </StyledHomePageContent>
    </StyledHomePageContainer>
  );
};

export default HomePage;
