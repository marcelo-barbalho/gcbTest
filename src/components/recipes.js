import React from "react";
import styled from "styled-components";
import food1 from "../assets/images/comida_1.svg";
import food2 from "../assets/images/comida_2.svg";
import food3 from "../assets/images/comida_3.svg";
import food4 from "../assets/images/comida_4.svg";

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
          <Recipe>
            <ImgContainer>
              <img src={food1} alt="teste" />
              <p>Broccoli Salad with Bacon</p>
              <Button>See Recipe</Button>
            </ImgContainer>
          </Recipe>
          <Recipe>
            <ImgContainer>
              <img src={food2} alt="teste" />
              <p>Classic Beef Burgers</p>
              <Button>See Recipe</Button>
            </ImgContainer>
          </Recipe>
          <Recipe>
            <ImgContainer>
              <img src={food3} alt="teste" />
              <p>Classic Potato Salad</p>
              <Button>See Recipe</Button>
            </ImgContainer>
          </Recipe>
          <Recipe>
            <ImgContainer>
              <img src={food4} alt="teste" />
              <p>Cherry Cobbler on the Grill</p>
              <Button>See Recipe</Button>
            </ImgContainer>
          </Recipe>
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
  text-align: right;
`;

const ImgContainer = styled.div`
  width: 253px;
  display: flex;
  align-items: center;
  flex-direction: row;
  p {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    font-size: 24pt;
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
