import React from "react";

import { gasoline as Gasoline } from "_assets";

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
  car: Car;
}

export function Car({ car }: CarProps) {
  return (
    <Wrapper>
      <Info>
        <Brand>{car.brand}</Brand>
        <Name>{car.name}</Name>

        <About>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>

          <Gasoline />
        </About>
      </Info>

      <Preview source={{ uri: car.thumbnail }} resizeMode="contain" />
    </Wrapper>
  );
}
