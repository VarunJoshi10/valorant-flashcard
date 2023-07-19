import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://e0.pxfuel.com/wallpapers/760/80/desktop-wallpaper-new-edited-valorant-1920-x-1080-pc-all-characters-r-valorant-valorant-characters.jpg'); /* Replace with your Valorant image URL */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      {/* Add any content you want to display on the home page */}
    </HomePageContainer>
  );
};

export default HomePage;
