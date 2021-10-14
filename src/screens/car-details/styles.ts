import styled from "styled-components/native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

import { Caption2, Subhead, Title2 } from "_atoms";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const SlideWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled(Caption2)`
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Name = styled(Title2)`
  color: ${({ theme }) => theme.colors.title};
`;

export const Rent = styled.View``;

export const Period = styled(Caption2)`
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Price = styled(Title2)`
  color: ${({ theme }) => theme.colors.main};
`;

export const About = styled(Subhead).attrs({
  font: "primary",
})`
  color: ${({ theme }) => theme.colors.text};

  text-align: justify;

  margin-top: 23px;

  line-height: ${RFValue(25)}px;
`;


export const Footer = styled.View`
  width: 100%;

  background: ${({ theme }) => theme.colors.background_primary};

  padding: 24px 24px ${getBottomSpace() + 24}px;
`