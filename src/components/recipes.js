import React from "react";
import styled from "styled-components";

const Recipes = () => {
  return (
    <>
      <RecipesContent>
        <Description>
          <Title>Our Best Recipes</Title>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Description>
        <RecipesContainer>
          <Recipe>a</Recipe>
          <Recipe>b</Recipe>
          <Recipe>c</Recipe>
          <Recipe>d</Recipe>
        </RecipesContainer>
      </RecipesContent>
    </>
  );
};

export default Recipes;

const RecipesContent = styled.div`
  height: 768px;
  width: 100%;
  background-color: #fafafc;
  padding: 20px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  align-items: center;
  width: 35%;

  p {
    font-family: muli, sans-serif;
    font-style: regular;
    line-height: 1.6;
    color: #9e9baf;
  }
`;
const Title = styled.h1`
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 32pt;
  padding: 20px;
  color: #1d164d;
`;
const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 4rem auto;
  height: 486px;
`;
const Recipe = styled.div`
  width: 48%;
  height: 225px;
`;
