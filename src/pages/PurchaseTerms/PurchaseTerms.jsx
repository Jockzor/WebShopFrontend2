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

const PurchaseTerm = () => (
  <div>
    <Title>Köpvillkor på Myrorna 2.0</Title>
    <Wrapper>
      <DescriptionBox>
        <Description>
          <DescriptionItem>
            <div>
              1. Beställningar och Priser:

              Genom att göra en beställning hos oss bekräftar du att du är minst 18 år gammal eller har målsmans tillstånd att genomföra köpet.
              Alla priser är angivna i SEK och inkluderar gällande moms.
              Vi förbehåller oss rätten att ändra priser och produkttillgänglighet utan förvarning.
            </div>
          </DescriptionItem>
          <DescriptionItem>
            <div>
              2. Betalning:

              Vi accepterar betalningar via t.ex. kreditkort, PayPal, Klarna.
              Betalningen debiteras vid tidpunkten för beställningen och behandlas säkert genom vår betalningsgateway.
            </div>
          </DescriptionItem>
          <DescriptionItem>
            <div>
              3. Leverans:

              Vi strävar efter att leverera beställningar så snart som möjligt. Leveranstiden beror på destination och vald leveransmetod.
              Fraktkostnader kan tillkomma och visas vid utcheckningen.
              Vi ansvarar inte för eventuella förseningar som beror på transportörer eller force majeure-situationer.
            </div>
          </DescriptionItem>
          <DescriptionItem>
            <div>
              4. Returer och Återbetalningar:

              Vi erbjuder en returpolicy på 30 dagar från mottagandet av varorna.
              För att vara berättigad till återbetalning måste produkterna returneras i oskadat skick och i originalförpackning.
              Returfrakt betalas av kunden om inte annat anges.
            </div>
          </DescriptionItem>
        </Description>
      </DescriptionBox>
    </Wrapper>
  </div>
);

export default PurchaseTerm;