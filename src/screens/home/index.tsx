import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Header } from './header';

import { Wrapper } from './style';

interface HomeScreenProps {

}

export function HomeScreen(props: HomeScreenProps){
  return (
    <Wrapper>
      <StatusBar style="light" backgroundColor="transparent" />

      <Header />
    </Wrapper>
  );
}