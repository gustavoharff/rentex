import React from "react";

import {
  gasoline,
  speed,
  acceleration,
  exchange,
  force,
  people,
} from "_assets";

import { Wrapper, Name } from "./styles";

const acessories = {
  gasoline,
  speed,
  acceleration,
  exchange,
  force,
  people,
};

export interface AccessoryProps {
  icon: keyof typeof acessories;
  name: string;
}

export function Accessory({ icon, name }: AccessoryProps) {
  const Icon = acessories[icon];

  return (
    <Wrapper>
      <Icon width={32} height={32} />

      <Name>{name}</Name>
    </Wrapper>
  );
}
