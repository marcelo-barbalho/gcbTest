import React from "react";
import styled from "styled-components";
import { ReactComponent as lupa } from "../assets/images/lupa.svg";

const Intro = () => {
  return (
    <>
      <IntroContent>
        <Search>
          Ready for Trying a new recipe?
          <input />
          <button>
            <Lupa />
          </button>
        </Search>
      </IntroContent>
    </>
  );
};

export default Intro;

const Lupa = styled(lupa)`
  fill: #fff;
  width: 25px;
`;
const IntroContent = styled.div`
  height: 665px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Search = styled.div`
  width: 90%;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  color: #1d164d;
  font-size: 48pt;
  max-width: 412px;
  input {
    height: 52px;
  }
`;
