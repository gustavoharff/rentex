import React, { ReactNode } from 'react';

import { Wrapper, Text } from './styles';

interface ButtonProps {
  children: ReactNode;
  color?: 'main' | 'success';
  onPress?: () => void;
}

export function Button({ children, color = 'main', onPress }: ButtonProps) {
  return (
    <Wrapper color={color}>
      <Text>{children}</Text>
    </Wrapper>
  )
}