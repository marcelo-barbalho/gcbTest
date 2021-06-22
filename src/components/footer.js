import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterLayout>
        <Rights>© Copyrights 2019 Stack. All Rights Reserved.</Rights>
        <FooterContainer>
          <Options>Privacy Policy</Options>
          <Options>Terms and Conditions</Options>
        </FooterContainer>
      </FooterLayout>
    </>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  background-color: #ffffff;
  height: 103px;
  width: 100%;
  align-items: center;
  font-size: 16pt;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Rights = styled.div`
  color: #1d164d;
`;
const Options = styled.div`
  padding: 20px;
  color: #9e9baf;
`;
