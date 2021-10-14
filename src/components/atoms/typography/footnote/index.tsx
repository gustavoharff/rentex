import React, { ReactNode } from "react";
import { TextProps } from "react-native";

import { Text } from "./styles";

interface FootnoteProps extends TextProps {
  children: ReactNode;
  font?: "primary" | "secondary";
}

export function Footnote({
  font = "primary",
  children,
  ...rest
}: FootnoteProps) {
  return (
    <Text font={font} {...rest}>
      {children}
    </Text>
  );
}
