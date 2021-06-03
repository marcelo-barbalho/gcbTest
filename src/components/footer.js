import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterLayout>
        <Rights>© Copyrights 2019 Stack. All Rights Reserved.</Rights>
        <Options>Privacy Policy</Options>
        <Options>Terms and Conditions</Options>
      </FooterLayout>
    </>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  background-color: #ffffff;
  height: 103px;
  width: 100%;
  font-family: muli, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16pt;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Rights = styled.div`
  color: #1d164d;
`;
const Options = styled.div`
  color: #9e9baf;
`;
