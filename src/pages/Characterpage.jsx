import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCharacter } from "../features/characterSlice";
import axios from "axios";

const Characterpage = () => {
  const item = useSelector(selectCharacter);
  const name = item.character.name;
  const img = item.character.img;
  const dob = item.character.birthday;
  const occupation = item.character.occupation;
  const status = item.character.status;
  const nickname = item.character.nickname;
  const portrayed = item.character.portrayed;
  const seasons = item.character.appearance;

  return (
    <CharacterpageContainer>
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <CharacterDetailsContainer>
        <span>Details</span>
        <Detail>
          <h3>Name: </h3>
          <h3 className="result">{` ${name}`}</h3>
        </Detail>
        <Detail>
          <h3>Date of Birth: </h3>
          <h3 className="result">{` ${dob}`}</h3>
        </Detail>
        <Detail>
          <h3>Occupation: </h3>
          <h3 className="result">
            {occupation && occupation.map((item) => <h3>{item}</h3>)}
          </h3>
        </Detail>
        <Detail>
          <h3>Status: </h3>
          <h3 className="result">{` ${status}`}</h3>
        </Detail>
        <Detail>
          <h3>Nickname: </h3>
          <h3 className="result">{` ${nickname}`}</h3>
        </Detail>
        <Detail>
          <h3>Portrayed: </h3>
          <h3 className="result">{` ${portrayed}`}</h3>
        </Detail>
        <Detail>
          <h3>Seasons: </h3>
          <h3 className="result">
            {seasons && seasons.map((item) => <h3>Season {item}</h3>)}
          </h3>
        </Detail>
      </CharacterDetailsContainer>
    </CharacterpageContainer>
  );
};

export default Characterpage;

const CharacterpageContainer = styled.div`
  width: 80%;
  display: flex;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  transition: transform 0.8s;
  > img {
    width: 100%;
    height: 700px;
    object-fit: contain;
  }
`;
const CharacterDetailsContainer = styled.div`
  margin-left: 50px;
  > span {
    font-size: 50px;
    font-weight: 800;
  }
`;
const Detail = styled.div`
  display: flex;
  margin-bottom: 30px;
  > .result {
    margin-left: 5px;
  }
`;
