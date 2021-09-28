import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Subhead } from "_components";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(24)}px;
  padding-top: ${RFValue(32)}px;
`;

export const HeaderTotalCars = styled(Subhead).attrs({
  font: "primary",
})`
  color: ${({ theme }) => theme.colors.text};
`;
