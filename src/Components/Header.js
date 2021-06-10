import React from "react";
import styled from "styled-components";
function Header() {
  return <Title>Star Wars Catalog</Title>;
}

export default Header;
const Title = styled.div`
  background-color: black;
  color: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
`;
