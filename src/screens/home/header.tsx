import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
 
import { logo as Logo } from '_assets';

import { HeaderTotalCars, HeaderWrapper } from './style';

export function Header(){
  return (
    <HeaderWrapper>
      <Logo width={RFValue(108)} height={RFValue(12)} />

      <HeaderTotalCars>
        Total de 12 carros
      </HeaderTotalCars>
    </HeaderWrapper>
  );
}