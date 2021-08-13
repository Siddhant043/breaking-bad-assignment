import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCharacter } from "../features/characterSlice";

const Character = ({ item }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setCharacter(item));
    history.push(`/characters/${item.name}`);
  };

  return (
    <CardContainer onClick={(e) => handleClick(e)}>
      <img src={item.img} alt="" />
      <Name>{item.name}</Name>
    </CardContainer>
  );
};

export default Character;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  &:hover {
    img {
      opacity: 0.5;
    }
    div {
      display: block;
    }
  }
`;

const Name = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;
