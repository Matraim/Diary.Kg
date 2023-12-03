import React from 'react';
import styled from 'styled-components';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Avatar } from '@mui/material';
import AvatarAdmin from '../assets/29134f62ecd1a9217fd10148beb01cba.jpg';
import { deepOrange } from '@mui/material/colors';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <AutoStoriesIcon fontSize="large" />
        Diary.io
      </Title>
      <NavBar>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavBar>
      <StyleAvatart>
        <Avatar alt="Remy Sharp" src={AvatarAdmin} />
        <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
      </StyleAvatart>
    </HeaderContainer>
  );
};

export default Header;

// styles

const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: #0877ee;
  width: 100%;
  position: fixed;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: wheat;
  svg {
    margin-right: 0.5rem;
  }
`;

const NavBar = styled.nav`
  display: flex;
  gap: 5rem;
  color: wheat;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavItem = styled.div`
  cursor: pointer;
`;

const StyleAvatart = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;
