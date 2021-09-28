import { StatusBar } from "expo-status-bar";
import React from "react";
import { Car } from "_molecules";

import { Header } from "./header";

import { Wrapper } from "./style";

interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  return (
    <Wrapper>
      <StatusBar style="light" backgroundColor="transparent" />

      <Header />

      <Car
        brand="Audi"
        name="RS 5 Coupé"
        rent={{ period: "AO DIA", price: 120 }}
      />
    </Wrapper>
  );
}
