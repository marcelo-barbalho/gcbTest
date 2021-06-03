import React from "react";
import styled from "styled-components";

const Blog = () => {
  return (
    <>
      <BlogContent>
        <BlogTitle>Read Our Blog</BlogTitle>
        <Discription>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Discription>
        <div>entrar com carrossel aqui</div>
      </BlogContent>
    </>
  );
};

export default Blog;

const BlogContent = styled.div`
  height: 668px;
  width: 100%;
  display: flex;
  background-color: #fafafc;
  justify-content: center;
  flex-direction: column;
`;
const BlogTitle = styled.h1`
  color: #1d164d;
  font-size: 32pt;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;
const Discription = styled.div`
  font-family: muli, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #9e9baf;
`;
