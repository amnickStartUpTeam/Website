import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_img from "../../imgs/footer_logo.png";
import { Text } from "./containers/Language";
import { LanguageContext } from "./containers/Language";

import { languageOptions } from "./languages";

const Nav = styled.nav`
  min-height: 9vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin-left: 50px;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  width: inherit;
  justify-content: center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  padding: 0 3% 0 3%;
`;

const StyledLink = styled(Link)`
  color: #171819;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-image: linear-gradient(rgb(211, 199, 199), rgb(211, 199, 199));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
  :hover {
    cursor: pointer;
    background-size: 100% 3px;
  }
`;

const NavIcon = styled.button`
  background: rgb(211, 199, 199);
  cursor: pointer;
  border: none;
  outline: none;
  margin-right: 1%;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background: white;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${({ toggle }) => (toggle ? "70%" : "40%")};
  }
`;

const Overlay = styled.div`
  height: ${({ toggle }) => (toggle ? "0" : "100vh")};
  position: fixed;
  display: flex;
  width: 36vw;
  right: 0;
  top: 9vh;
  background: #fff;
  box-shadow: ${({ toggle }) => (toggle ? "0" : "8px 0px 5px 9px grey")};
  transition: height 0.4s linear;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  width: inherit;
  left: 50%;
  top: 45%;
  display: ${({ toggle }) => (toggle ? "none" : "")};
  transform: translate(-50%, -50%);

  li {
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

function Menu() {
  const [toggle, setToggle] = useState(false);
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // const onClick = e => {
  //   e.preventDefault();
  //   setToggle(!false);
  // };

  const handleLanguageChange = (e) => userLanguageChange(e.target.value);
  return (
    <>
      <Nav>
        <Logo src={logo_img} alt="logo" />
        <Navbar>
          <Item>
            <StyledLink to="/">Home</StyledLink>
          </Item>
          <Item>
            <StyledLink to="">About us</StyledLink>
          </Item>
          <Item>
            <StyledLink to="">Services</StyledLink>
          </Item>
          <Item>
            <StyledLink>Our Work</StyledLink>
          </Item>
          <Item>
            <StyledLink>
              <select onChange={handleLanguageChange} value={userLanguage}>
                {Object.entries(languageOptions).map(([id, name]) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </StyledLink>
            <StyledLink>
              <img
                className="flag_of_the_united_states"
                Style="max-width: 5%;     margin-left: 6px;"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                alt="flag"
              />

              <img
                className="flag_of_the_united_states"
                Style="    max-width: 4%;
              margin-left: 4px;"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAC2CAMAAAAr+FInAAAAllBMVEX///8NXq8AVKsAWKxrlMgAUaqnvNzi7farwt8AU6sAW660yuRpjsQLXa/y9vlGfb24wNGhxe7x+v///vodc8RAcrUtbLU4dLrs9v709PSXv/Hw9fmaqL/5/P7g5uquyObY5/gASqkAbMC00vG9x9MqbrhEh81Zhb+Ru+rh7/wYZLIrabQ4fsicxfO40Oq90OTK3/jH0NlWlnc+AAACoElEQVR4nO3dyU7DMBgAYZoQoIGwQ1kLZd+X9385xAEJwVQ2oGK7ne+I9At15F7spJ6bkyRJ0lQYLsU42Tv8anU5arIAp5BlfVSFNWeb3wa3dps6YjR/ow3KUvXC2m3IstNGTBagMgsxCzILMgsyCzILMgsyCzILMgsyCzILMgsyCzILSpKlbevMNQmydIP5ldyd/3+W6gD+Z2b24G9mMQszCzILMgsyCzILMgsyCzILMgsyCzILMgvCLP2JZqlLzRKzWjrO0oUnC1gtW5il6YLaGrPUbXiyn38WXC0Xl4MIV5DlOmZwcLOYvVvIsn8cBSbj5o7qiC9pUrjzv//DFfdTR1X4S5pUoiyuFrOYxSxmMcsHsyCzILMgsyCzILMgsyCzILMg91vImCwT351L/bkDxjyXe7cbdv8Ae7lr9xGTdzfHh6uZo73cmJ3/js+JYtZBqTv/niqmOFUsNourxSzILMgsyCzILMgsyCzILMgsyCzILMgsyCwoQZb6cfIf668SZOldruVuJ8Fb872uzV2K31h4D5M3f6iEmQWZBZkFmQWZBZkFmQWZBZkFmQWZBZkFmQWZBXGWUT9k7I0z/So4WwC8cWa4HOMJnkB9jposwAtkmfTjygWgLW6zmIWZBZkFmQWZBZkFmQWZBZkFmQWZBZkFmQWZBZkFmQVRluHCzKNNy6hL1afa7y9Vn2q/PyeaamZBZkFmQWZBZkFmQWZBZkFmQWZBZkFmQWZBmOVi5rPUuFqa1Jeap4Yv/L6uzM86ej3cLW53/plZkFmQWZBZkFmQWZBZkFmQWZBZkFmQWZBZkFmQWZBZEGZJfaV5engRz6iZcT5piTw+Q2ZBZkFmQWZBZkFmQWZBZkFmQWZBZkFmQWZBZkFmQWZBn7K8AfNsOyL/elHmAAAAAElFTkSuQmCC"
                alt="flag"
              />
            </StyledLink>
          </Item>
        </Navbar>
        <NavIcon onClick={() => setToggle(!toggle)}>
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
          <Line toggle={!toggle} />
        </NavIcon>
      </Nav>
      <Overlay toggle={!toggle}>
        <OverlayMenu toggle={!toggle}>
          <Item>
            <StyledLink to="/">Home</StyledLink>
          </Item>
          <Item>
            <StyledLink to="">About us</StyledLink>
          </Item>
          <Item>
            <StyledLink to="">Services</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/restaurant">Our Work</StyledLink>
          </Item>
          <StyledLink>
            <select onChange={handleLanguageChange} value={userLanguage}>
              {Object.entries(languageOptions).map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </StyledLink>
        </OverlayMenu>
      </Overlay>
    </>
  );
}
export default Menu;
