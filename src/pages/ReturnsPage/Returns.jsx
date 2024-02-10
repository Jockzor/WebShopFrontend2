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

const DescriptionItem = styled.h4`
margin-bottom: 20px;
`

const Returns = () => {
  return (
    <div>
      <Title>Byten & returer</Title>
      <Wrapper>
        <DescriptionBox>
          <Description>
            <DescriptionItem>
              <div>
              Retur- och Bytespolicy för Myrorna 2.0

Vi på Myrorna 2.0 strävar efter att ge dig den bästa shoppingupplevelsen medan vi också värnar om miljön och hållbarheten. För att säkerställa att du är helt nöjd med ditt köp och för att göra processen smidig för dig, har vi utformat följande retur- och bytespolicy:

Returer:
              </div>
            </DescriptionItem>
            <DescriptionItem>
              <div>
              Om du av någon anledning inte är helt nöjd med ditt köp, erbjuder vi en returpolicy på 30 dagar från inköpsdatumet.
Varan måste vara oanvänd, i originalskick och med eventuella etiketter kvar.
Returavgiften är 15% av produktens ursprungliga pris för att täcka hanterings- och återställningskostnader.
Bytes:
              </div>
            </DescriptionItem>
            <DescriptionItem>
              <div>
              Om du av någon anledning inte är helt nöjd med ditt köp, erbjuder vi en returpolicy på 30 dagar från inköpsdatumet.
Varan måste vara oanvänd, i originalskick och med eventuella etiketter kvar.
Returavgiften är 15% av produktens ursprungliga pris för att täcka hanterings- och återställningskostnader.
Bytes:
              </div>
            </DescriptionItem>
            <DescriptionItem>
              <div>
              Om du vill byta en vara mot en annan storlek eller färg, vänligen kontakta vår kundtjänst inom 14 dagar från inköpsdatumet.
Varan måste vara i originalskick och med eventuella etiketter kvar.
Bytes är föremål för tillgänglighet. Om den önskade storleken eller färgen inte är tillgänglig, kan vi erbjuda en återbetalning eller en annan produkt som alternativ.
Hur man returnerar eller byter:

Kontakta vår kundtjänst på support@myrorna20.com och ange ditt ordernummer och anledningen till retur eller byte.
              </div>
            </DescriptionItem>

  </Description>
        </DescriptionBox>
      </Wrapper>
    </div>
  );
};

export default Returns;