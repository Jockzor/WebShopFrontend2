import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  
`;

const Title = styled.h1`
  margin-top: 25px;
  text-align: center;
  color: black;
  font-size: 42px;
  text-decoration: underline;
  margin-bottom: 20px;
`;

const DescriptionBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  
`;

const Description = styled.h3`
  color:
  font-size: 18px;
  line-height: 1.6;
  padding: 20px;
`;

const AboutUs = () => {
  return (
    <div>
      <Title>Fakta om oss.</Title>
      <Wrapper>
        <DescriptionBox>
          <Description>
Myrorna 2.0 är en e-handelsplattform specialiserad på kläder och mode, skapad av Joacim och Niklas. <br /> Genom att kombinera deras expertis inom mjukvaruutveckling och modeindustrin har de skapat en innovativ butik som erbjuder användare ett brett utbud av kläder och accessoarer tillgängliga för köp online. <br />

Med fokus på att erbjuda en sömlös och bekväm shoppingupplevelse strävar Myrorna 2.0 efter att leverera högkvalitativa produkter till sina kunder samtidigt som de upprätthåller en användarvänlig och intuitiv plattform. <br /> Genom att erbjuda olika kategorier, storlekar och stilar av kläder och accessoarer, syftar Myrorna 2.0 till att tillgodose olika smaker och preferenser.

Med sitt engagemang för kundnöjdhet och ständig innovation strävar Joacim och Niklas efter att göra Myrorna 2.0 till den främsta destinationen för alla som söker högkvalitativa kläder och modeartiklar online.
          </Description>
        </DescriptionBox>
      </Wrapper>
    </div>
  );
};

export default AboutUs;