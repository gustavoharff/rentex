import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { Caption2, Subhead } from "_atoms";

export const Wrapper = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;

  padding: ${RFValue(17)}px ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.View``;

export const Brand = styled(Caption2).attrs({
  font: "secondary",
})`
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Name = styled(Subhead).attrs({
  font: "secondary",
})`
  color: ${({ theme }) => theme.colors.title};

  margin-top: ${RFValue(4)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
`;

export const Period = styled(Caption2)`
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Price = styled(Subhead).attrs({
  font: "secondary",
})`
  color: ${({ theme }) => theme.colors.main};

  margin-top: ${RFValue(4)}px;
`;

export const Preview = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(92)}px;
`