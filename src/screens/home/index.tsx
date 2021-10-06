import { StatusBar } from "expo-status-bar";
import React from "react";

import { Car } from "_molecules";
import { CarsList } from "_organisms";

import { Header } from "./header";

import { Wrapper } from "./style";

export function HomeScreen() {
  const cars = [
    {
      brand: "Audi",
      name: "RS 5 Coupé",
      rent: { period: "AO DIA", price: 120 },
      thumbnail:
        "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfcfb61d5cd.png",
    },
  ];

  return (
    <Wrapper>
      <StatusBar style="light" backgroundColor="transparent" />

      <Header />

      <CarsList cars={cars} />
    </Wrapper>
  );
}
