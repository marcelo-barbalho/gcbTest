import React from "react";
import styled from "styled-components";
import joinImg from "../assets/images/bloco_final_image.svg";

const Join = () => {
  return (
    <>
      <JoinContent>
        <JoinTitle>Join our membership to get special offer</JoinTitle>
        <Input placeholder="Enter your email address"></Input>
        <Button>Join</Button>
      </JoinContent>
    </>
  );
};

export default Join;

const JoinContent = styled.div`
  height: 672px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${joinImg}) no-repeat #ffffff right bottom;
`;
const JoinTitle = styled.h1``;
const Input = styled.input`
  width: 30%;
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
