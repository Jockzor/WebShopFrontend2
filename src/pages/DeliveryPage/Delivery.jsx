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

const DescriptionItem = styled.div`
  margin-bottom: 12px;
`;

const Delivery = () => {
  return (
    <div>
      <Title>Leverans alternativ</Title>
      <Wrapper>
        <DescriptionBox>
          <Description>
            <DescriptionItem>
          <div>
          1. Standardleverans: Vår standardleverans är det mest prisvärda alternativet och vanligtvis tar 3-5 arbetsdagar att leverera beställningen till kunden.
          </div></DescriptionItem>
            <DescriptionItem>
            <div>
            2. Expressleverans: För kunder som behöver sina produkter snabbare erbjuder vi expressleveransalternativ. Med expressleverans levereras beställningen vanligtvis inom 1-2 arbetsdagar, beroende på plats och tillgänglighet.
            </div>
            </DescriptionItem>
            <DescriptionItem>
            <div>
            3. Hämta i butik: För kunder som föredrar att hämta sina beställningar personligen, erbjuder vi möjligheten att hämta produkterna från vår fysiska butik. Detta alternativ kan vara praktiskt för dem som vill undvika leveranskostnader eller föredrar att få sina produkter direkt.
            </div>
            </DescriptionItem>
            <DescriptionItem>
            <div>
            3. Hämta i butik: För kunder som föredrar att hämta sina beställningar personligen, erbjuder vi möjligheten att hämta produkterna från vår fysiska butik. Detta alternativ kan vara praktiskt för dem som vill undvika leveranskostnader eller föredrar att få sina produkter direkt.
          </div>
            </DescriptionItem>
            <DescriptionItem>
            <div>4.
          Fri frakt vid vissa köp: Ibland erbjuder vi fri frakt för beställningar över en viss summa. Detta är ett incitament för kunder att handla mer och kan vara lockande för dem som letar efter ett bra erbjudande.
          </div>
            </DescriptionItem>
          <DescriptionItem><div>
            5. Internationell leverans: För internationella kunder erbjuder vi också leveransalternativ för att möjliggöra leverans över hela världen. Leveranstiderna och kostnaderna kan variera beroende på destination och valt leveransalternativ.
          </div></DescriptionItem>

  </Description>
        </DescriptionBox>
      </Wrapper>
    </div>
  );
};

export default Delivery;