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

const Delivery = () => {
  return (
    <div>
      <Title>Leverans</Title>
      <Wrapper>
        <DescriptionBox>
          <Description>
          Leverans
  </Description>
        </DescriptionBox>
      </Wrapper>
    </div>
  );
};

export default Delivery;