import React from 'react';
import Bestsellers from './components/bestsellers';
import Coffee from './components/coffee';
import Goods from './components/goods';

import styled from 'styled-components';

const StyledBlock = styled.div`
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: Tamoha;

  h2 {
    align-self: center;
    margin-bottom: 50px;
  }
`;

const App = () => {
  return (
    <>
      <StyledBlock>
        <h2>Bestsellers</h2>
        <Bestsellers/>
      </StyledBlock>
      <StyledBlock>
        <h2>Coffee</h2>
        <Coffee/>
      </StyledBlock>
      <StyledBlock>
        <h2>Goods</h2>
        <Goods/>
      </StyledBlock>
    </>
  )
}

export default App;
