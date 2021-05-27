import React from "react";
import Layout from "../components/layout";
import Blog from "../components/blog";
import Intro from "../components/intro";
import Join from "../components/join";
import Recipes from "../components/recipes";
import Services from "../components/services";

const Portal = () => {
  return (
    <>
      <Layout>
        <Intro />
        <Recipes />
        <Services />
        <Blog />
        <Join />
      </Layout>
    </>
  );
};

export default Portal;
