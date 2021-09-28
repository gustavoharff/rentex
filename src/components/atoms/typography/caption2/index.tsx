import React, { ReactNode } from 'react';
import { TextProps, Text } from 'react-native';

interface Caption2Props extends TextProps {
  children: ReactNode;
}

export function Caption2({ children, ...rest }: Caption2Props){
  return (
    <Text {...rest}>
      {children}
    </Text>
  );
}