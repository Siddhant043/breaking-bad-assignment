import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push("/");
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="" onClick={handleOnClick} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  place-items: center;
  margin: 20px 0px;
  > img {
    height: 100px;
    width: 170px;
  }
`;
