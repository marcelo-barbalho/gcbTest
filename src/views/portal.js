import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Blog from "../components/blog";
import Intro from "../components/intro";
import Join from "../components/join";
import Recipes from "../components/recipes";
import Services from "../components/services";
import styled from "styled-components";
import bgcImage from "../assets/images/Illustration.svg";

const Portal = () => {
  return (
    <>
      <Segment>
        <Header />
        <Intro />
      </Segment>
      <Recipes />
      <Services />
      <Blog />
      <Join />
      <Footer />
    </>
  );
};

export default Portal;

const Segment = styled.div`
  background: url(${bgcImage}) no-repeat #ffffff right top;
  background-size: contain;
`;
