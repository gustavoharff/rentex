import React from "react";
import { Accessory, AccessoryProps } from "_molecules";

import { Wrapper } from "./styles";

interface AccessoriesProps {
  accessories: AccessoryProps[];
}

export function Accessories({ accessories }: AccessoriesProps) {
  return (
    <Wrapper>
      {accessories.map((accessory) => (
        <Accessory name={accessory.name} icon={accessory.icon} />
      ))}
    </Wrapper>
  );
}
