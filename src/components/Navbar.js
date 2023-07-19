import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: ${props => props.theme.colors.secondary};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

const StyledNavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
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

const SignOutButton = styled.button`
  background-color: ${props => props.theme.colors.accent};
  color: antiquewhite;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10%;

  &:hover {
    background-color: antiquewhite;
    color: ${props => props.theme.colors.text};
  }
`;

const SearchBar = styled.input`
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.text};
  padding: 5px;
`;

const Navbar = ({ signOut, user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <StyledNavbar>
      <LogoContainer>
      <Link to="/">
        <Logo src="https://img.icons8.com/?size=312&id=aUZxT3Erwill&format=png" alt="Valorant logo" />
      </Link>
        <Title>Valorant FlashCard</Title>
      </LogoContainer>
        
      <StyledNavList>
        <li>
          <StyledNavLink to="/agents">Agents</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/weapons">Weapons</StyledNavLink>
        </li>
      </StyledNavList>
      <form onSubmit={handleSearchSubmit}>
        <SearchBar
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      {user && (
        <SignOutButton onClick={signOut}>
        Sign Out
      </SignOutButton>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
