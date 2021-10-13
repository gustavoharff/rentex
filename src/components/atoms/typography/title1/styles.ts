import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TextProps {
  font: "primary" | "secondary";
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme, font }) =>
    font === "primary" ? theme.fonts.primary_500 : theme.fonts.secondary_500};

  font-size: ${({ theme }) => RFValue(theme.fonts.sizes.title1)}px;

  line-height: ${RFValue(34)}px;
`;
