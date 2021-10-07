import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

interface IndexProps {
  active: boolean;
}

export const Wrapper = styled.View`
  width: 100%;
`;

export const Indexs = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const Index = styled.View<IndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
`;

export const ImageWrapper = styled.View`
  width: ${width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 280px;
  height: 132px;
`;
