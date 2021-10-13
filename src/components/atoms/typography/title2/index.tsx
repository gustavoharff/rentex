import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { Text } from "./styles";

interface Title2Props extends TextProps {
  children: ReactNode;
  font?: 'primary' | 'secondary';
}

export function Title2({ font = "secondary",children, ...rest }: Title2Props) {
  return <Text font={font} {...rest}>{children}</Text>;
}
