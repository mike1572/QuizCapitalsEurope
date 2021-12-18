import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import {WelcomeScreen} from './components/WelcomeScreen'

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreen/>
    </NavigationContainer>
  );
}


