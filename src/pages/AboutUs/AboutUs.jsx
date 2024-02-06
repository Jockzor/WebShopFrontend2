import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  
`;

const Title = styled.h1`
  text-align: center;
  color: dodgerblue;
  font-size: 32px;
  text-decoration: underline;
  margin-bottom: 20px;
`;

const DescriptionBox = styled.div`
  background-color: gray;
  padding: 20px;
  border-radius: 10px;
  
`;

const Description = styled.h3`
  color:
  font-size: 18px;
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <div>
      <Title>Välkommen till Myrorna 2.0 - Din Destinationsbutik för Stil och Hållbarhet!</Title>
      <Wrapper>
        <DescriptionBox>
          <Description>
            Myrorna 2.0 är inte bara en klädbutik, det är en upplevelse och en resa genom mode och hållbarhet. Grundat med passionen att förändra synen på second-hand shopping och erbjuda unika, trendiga plagg med ett miljövänligt fokus, har Myrorna 2.0 blivit det självklara valet för alla modeentusiaster med en hjärna för hållbarhet.
          </Description>
        </DescriptionBox>
      </Wrapper>
    </div>
  );
};

export default AboutUs;