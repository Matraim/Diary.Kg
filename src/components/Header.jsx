import React from 'react';
import styled from 'styled-components';
import Trello from '../assets/icons/trello-ar21.svg';

const HeaderContainer = styled.header`
  background-color: #0e8bd3;
  color: #fff;
  padding: 0.5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <img src={Trello} alt="img logo icon" />
      </Title>
    </HeaderContainer>
  );
};

export default Header;
