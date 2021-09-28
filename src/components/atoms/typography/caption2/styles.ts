import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};

  font-size: ${({ theme }) => RFValue(theme.fonts.sizes.subhead)}px;

  line-height: ${RFValue(10.88)}px;
`;
