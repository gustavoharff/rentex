import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { Text } from "./styles";

interface Title1Props extends TextProps {
  children: ReactNode;
  font?: 'primary' | 'secondary';
}

export function Title1({ font = "secondary",children, ...rest }: Title1Props) {
  return <Text font={font} {...rest}>{children}</Text>;
}
