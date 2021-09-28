import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { Text } from "./styles";

interface SubheadProps extends TextProps {
  children: ReactNode;
  font: 'primary' | 'secondary';
}

export function Subhead({ children, ...rest }: SubheadProps) {
  return <Text {...rest}>{children}</Text>;
}
