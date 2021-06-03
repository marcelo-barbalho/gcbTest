import React from "react";
import styled from "styled-components";
import serviceImg from "../assets/images/bloco_services.svg";

const Services = () => {
  return (
    <>
      <ServicesContent>
        <Container>
          <ServiceTitle>The best services ready To serve you</ServiceTitle>
          <ServiceText>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </ServiceText>
          <Button>Know More</Button>
        </Container>
      </ServicesContent>
    </>
  );
};

export default Services;

const ServicesContent = styled.div`
  height: 727px;
  width: 100%;
  background: url(${serviceImg}) no-repeat #ffffff left top;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ServiceTitle = styled.h1`
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 32pt;
`;
const ServiceText = styled.div`
  p {
    color: #bcbcbc;
    font-family: muli, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16pt;
  }
`;
const Button = styled.button`
  background-color: #badc58;
  border: none;
  border-radius: 5px;
  width: 134px;
  color: #ffffff;
  font-family: muli, sans-serif;
  font-weight: 400;
  font-style: normal;
`;
const Container = styled.div`
  flex-direction: column;
  width: 420px;
`;
