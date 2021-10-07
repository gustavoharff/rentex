import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "_styles";

import { Wrapper } from "./styles";

interface BackButtonProps extends BorderlessButtonProps {
  mode: "dark" | "light";
}

export function BackButton({ mode, ...rest }: BackButtonProps) {
  return (
    <Wrapper {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={theme.colors.text} />
    </Wrapper>
  );
}
