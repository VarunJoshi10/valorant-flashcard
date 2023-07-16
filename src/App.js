import { Amplify } from 'aws-amplify';

import { View, Image, useTheme, Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
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
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    );
}

export default App;