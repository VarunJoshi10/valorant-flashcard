import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgentList from './AgentList';
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
      <Navbar>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
      </Navbar>
      <Routes>
      <Route path="/agents" component={AgentList} />
      </Routes>
    </Router>
          <AgentList></AgentList>
          </ThemeProvider>
        </main>
      )}
    </Authenticator>
    );
}

export default App;