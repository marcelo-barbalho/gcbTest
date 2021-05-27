import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderLayout>Header</HeaderLayout>
    </>
  );
};

export default Header;

const HeaderLayout = styled.header`
  background-color: aquamarine;
  height: 103px;
  width: 1366px;
`;
