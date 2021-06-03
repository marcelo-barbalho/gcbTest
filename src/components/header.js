import React from "react";
import styled from "styled-components";

const Header = () => {
  const menu = [
    {
      name: "HEALTHY RECIPES",
      link: "",
    },
    {
      name: "BLOG",
      link: "",
    },
    {
      name: "JOIN",
      link: "",
    },
  ];

  return (
    <>
      <HeaderLayout>
        <Logo>Healthy Food</Logo>
        <MenuNav>
          <ul>
            {menu.map((menuItem, i) => (
              <li key={i}>
                <ItemLink href={menuItem.link}>{menuItem.name}</ItemLink>
              </li>
            ))}
          </ul>
          <RegButton>REGISTER</RegButton>
        </MenuNav>
      </HeaderLayout>
    </>
  );
};

export default Header;

const HeaderLayout = styled.header`
  background-color: transparent;
  height: 103px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  color: #badc58;
  font-size: 32pt;
  width: 30%;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;
const MenuNav = styled.nav`
  font-size: 16pt;

  display: flex;
  justify-content: space-between;
  font-weight: 700;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    li {
      padding-right: 45px;
    }
  }
`;
const ItemLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`;
const RegButton = styled.button`
  background-color: #fff;
  color: #badc58;
`;
