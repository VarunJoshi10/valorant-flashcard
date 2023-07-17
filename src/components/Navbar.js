import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // or import from your chosen styling library

const StyledNavbar = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const StyledNavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-size: 18px;
  margin-right: 15px;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
        <Logo src='https://img.icons8.com/?size=100&id=aUZxT3Erwill&format=png' alt="Valorant logo" />
      <ul>
        <li>
          <StyledNavLink to="/agents">Agents</StyledNavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
