import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
 
import { logo as Logo } from '_assets';

import { HeaderTotalCars, HeaderWrapper } from './style';

interface HeaderProps {

}

export function Header(props: HeaderProps){
  return (
    <HeaderWrapper>
      <Logo width={RFValue(108)} height={RFValue(12)} />

      <HeaderTotalCars>
        Total de 12 carros
      </HeaderTotalCars>
    </HeaderWrapper>
  );
}