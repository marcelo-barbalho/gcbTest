import React from "react";
import styled from "styled-components";
import blog1 from "../assets/images/blog_image_1.svg";
import blog2 from "../assets/images/bloco_image_2.svg";
import blog3 from "../assets/images/bloco_image_3.svg";
import blog4 from "../assets/images/bloco_image_4.svg";
import photo1 from "../assets/images/Photo.png";
import photo2 from "../assets/images/Photo-1.png";
import photo3 from "../assets/images/Photo-2.png";
import photo4 from "../assets/images/Photo-3.png";

const Blog = () => {
  return (
    <>
      <BlogContent>
        <Discription>
          <BlogTitle>Read Our Blog</BlogTitle>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Discription>
        <Carroussel>
          <Card>
            <img src={blog1} alt="teste" />
            <CardText>
              <h3>Quick-start guide to nuts and seeds</h3>
              <div>
                <img src={photo1} alt="teste" /> Kevin Ibrahim
              </div>
            </CardText>
          </Card>
          <Card>
            <img src={blog2} alt="teste" />
            <CardText>
              <h3>Nutrition: Tips for Improving Your Health</h3>
              <div>
                <img src={photo2} alt="teste" />
                Mike Jackson
              </div>
            </CardText>
          </Card>
          <Card>
            <img src={blog3} alt="teste" />
            <CardText>
              <h3>The top 10 benefits of eating healthy</h3>
              <div>
                <img src={photo3} alt="teste" /> Bryan McGregor
              </div>
            </CardText>
          </Card>
          <Card>
            <img src={blog4} alt="teste" />
            <CardText>
              <h3>What Makes a Healthy Diet?</h3>
              <div>
                <img src={photo4} alt="teste" /> Jashua
              </div>
            </CardText>
          </Card>
        </Carroussel>
      </BlogContent>
    </>
  );
};

export default Blog;

const BlogContent = styled.div`
  height: 768px;
  width: 100%;
  display: flex;
  background-color: #fafafc;
  padding: 80px;
  padding-top: 40px;
  justify-content: center;
  flex-direction: column;
`;
const BlogTitle = styled.h1`
  font-size: 32pt;
  padding-bottom: 10px;
`;
const Discription = styled.div`
  p {
    color: #bcbcbc;
    line-height: 1.5;
  }
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  align-items: center;
  width: 40%;
`;
const Card = styled.div`
  width: 348px;
  background-color: #fff;
  box-shadow: 0px 15px 20px rgba(29, 22, 77, 0.18);
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;
const CardText = styled.div`
  div {
    display: flex;

    align-items: center;
    color: #bcbcbc;
  }
  img {
    margin-right: 8px;
  }

  padding: 20px;
  width: 95%;
  height: 203px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
`;

const Carroussel = styled.div`
  display: flex;
  align-items: center;
  height: 450px;
`;
