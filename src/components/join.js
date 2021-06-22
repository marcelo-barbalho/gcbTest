import React from "react";
import styled from "styled-components";
import joinImg from "../assets/images/bloco_final_image.svg";

const Join = () => {
  return (
    <>
      <JoinContent>
        <Container>
          <JoinTitle>Join our membership to get special offer</JoinTitle>
          <Input placeholder="Enter your email address"></Input>
          <Button>Join</Button>
        </Container>
      </JoinContent>
    </>
  );
};

export default Join;

const JoinContent = styled.div`
  height: 672px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url(${joinImg}) no-repeat #ffffff right bottom;
`;
const Container = styled.div`
  flex-direction: column;
  width: 50%;
  padding-left: 10%;
`;
const JoinTitle = styled.h1`
  width: 70%;
  padding-bottom: 15px;
`;
const Input = styled.input`
  width: 65%;
  height: 54px;
  padding: 20px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #707070;
`;
const Button = styled.button`
  width: 93px;
  height: 54px;
`;
