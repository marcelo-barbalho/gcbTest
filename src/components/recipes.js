import React from "react";
import styled from "styled-components";

const Recipes = () => {
  return (
    <>
      <RecipesContent>Recipes</RecipesContent>
    </>
  );
};

export default Recipes;

const RecipesContent = styled.div`
  height: 768px;
  width: 100%;
  background-color: orange;
`;
