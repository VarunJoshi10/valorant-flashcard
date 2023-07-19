import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgentList from './AgentList';
import WeaponList from './WeaponList';
import HomePage from './HomePage';
import { Amplify } from 'aws-amplify';
import Navbar from './components/Navbar';
import { View, Image, useTheme, Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from 'styled-components'; // or import from your chosen styling library
import valorantTheme from './valorant-theme';

import awsExports from './aws-exports';
// import { Router } from '@aws-amplify/ui-react/dist/types/components/Authenticator/Router';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Valorant logo"
            src="https://img.icons8.com/?size=312&id=aUZxT3Erwill&format=png"
          />
          <h1>Valorant FlashCard</h1>
          {/* {user && <button onClick={signOut}>Sign out</button>} */}
        </View>
      );
    }}
    ;
    return (
      <Authenticator components={components}>
      {({ signOut, user }) => (
        <main>
          <ThemeProvider theme={valorantTheme}>
          <Router>
          <div style={{ backgroundColor: valorantTheme.colors.secondary }}> {/* Apply secondary color as the background */}
          <Navbar signOut={signOut} user={user} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/agents" element={<AgentList />} />
                <Route path="/weapons" element={<WeaponList />} />
              </Routes>
            </div>
    </Router>
          {/* <AgentList></AgentList> */}
          {/* <WeaponList></WeaponList> */}
          </ThemeProvider>
        </main>
      )}
    </Authenticator>
    );
}

export default App;