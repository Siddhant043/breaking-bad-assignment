import React, { useState } from "react";
import styled from "styled-components";

const Search = ({ getName }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getName(q);
  };

  return (
    <SearchSection>
      <form>
        <InputSection
          type="text"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </SearchSection>
  );
};

export default Search;

const SearchSection = styled.section`
  height: 100px;
`;

const InputSection = styled.input`
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  width: 60%;
  margin: auto;
`;
