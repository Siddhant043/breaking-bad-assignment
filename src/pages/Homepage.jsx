import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Characters from "../components/Characters";
import Search from "../components/Search";

const Homepage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [name]);

  return (
    <HomepageContainer>
      <Search getName={(q) => setName(q)} />
      <Characters isLoading={isLoading} items={items} />
    </HomepageContainer>
  );
};

export default Homepage;

const HomepageContainer = styled.div``;
