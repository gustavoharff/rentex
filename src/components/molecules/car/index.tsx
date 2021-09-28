import React from "react";

import { gasoline as Gasoline, audi } from "_assets";

import {
  Wrapper,
  Info,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Preview,
} from "./styles";

interface CarProps {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
}

export function Car({ brand, name, rent }: CarProps) {
  return (
    <Wrapper>
      <Info>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>{rent.price}</Price>
          </Rent>

          <Gasoline />
        </About>
      </Info>

      <Preview source={audi} />
    </Wrapper>
  );
}
