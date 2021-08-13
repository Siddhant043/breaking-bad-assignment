import React from "react";
import styled from "styled-components";
import Character from "./Character";

const Characters = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <CardsContainer>
      {items.map((item) => (
        <Character key={item.char_id} item={item}></Character>
      ))}
    </CardsContainer>
  );
};

export default Characters;

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  cursor: pointer;
  background-color: transparent;
  height: 300px;
  perspective: 1000px;
`;
