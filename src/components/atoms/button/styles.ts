import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { Subhead } from "_atoms";

interface WrapperProps {
  color: "main" | "success";
}

export const Wrapper = styled(RectButton)<WrapperProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background: ${({ theme, color }) =>
    color === "main" ? theme.colors.main : theme.colors.success};
`;

export const Text = styled(Subhead).attrs({
  font: "primary",
})`
  color: ${({ theme }) => theme.colors.shape};
`;
