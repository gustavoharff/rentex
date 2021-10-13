import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TextProps {
  font: "primary" | "secondary";
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme, font }) =>
    font === "primary" ? theme.fonts.primary_500 : theme.fonts.secondary_500};

  font-size: ${({ theme }) => RFValue(theme.fonts.sizes.title2)}px;

  line-height: ${RFValue(28)}px;
`;
