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
            <img src={food1} alt="teste" />
            <RecipeContent>
              <h3>Broccoli Salad with Bacon</h3>
              <button>See Recipe</button>
            </RecipeContent>
          </Recipe>
          <Recipe>
            <img src={food2} alt="teste" />
            <RecipeContent>
              <h3>Classic Beef Burgers</h3>
              <button>See Recipe</button>
            </RecipeContent>
          </Recipe>
          <Recipe>
            <img src={food3} alt="teste" />
            <RecipeContent>
              <h3>Classic Potato Salad</h3>
              <button>See Recipe</button>
            </RecipeContent>
          </Recipe>
          <Recipe>
            <img src={food4} alt="teste" />
            <RecipeContent>
              <h3>Cherry Cobbler on the Grill</h3>
              <button>See Recipe</button>
            </RecipeContent>
          </Recipe>
        </RecipesContainer>
      </RecipesContent>
    </>
  );
};

export default Recipes;

const RecipesContent = styled.section`
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
  max-width: 1092px;
  width: 80%;
  margin: 2rem auto;
  height: 486px;
`;
const Recipe = styled.div`
  width: 48%;
  height: 225px;

  background-color: #fff;
  box-shadow: 0px 15px 20px rgba(29, 22, 77, 0.18);
  max-width: 528px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const RecipeContent = styled.div`
  padding: 2rem;
`;
