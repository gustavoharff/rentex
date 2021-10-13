import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { Text } from "./styles";

interface SubheadProps extends TextProps {
  children: ReactNode;
  font?: 'primary' | 'secondary';
}

export function Subhead({ font = "secondary", children, ...rest }: SubheadProps) {
  return <Text font={font} {...rest}>{children}</Text>;
}
