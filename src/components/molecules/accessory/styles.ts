import styled from "styled-components/native";

import { Footnote } from "_atoms";

export const Wrapper = styled.View`
  width: 100px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  margin-bottom: 8px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const Name = styled(Footnote)`
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
