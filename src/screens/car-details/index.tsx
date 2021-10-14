import React from "react";

import { BackButton, Button } from "_atoms";
import { Accessory, ImageSlider } from "_molecules";
import { Accessories } from "_organisms";

import {
  Wrapper,
  Header,
  SlideWrapper,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Footer
} from "./styles";

export function CarDetails() {
  return (
    <Wrapper>
      <Header>
        <BackButton mode="dark" />
      </Header>

      <SlideWrapper>
        <ImageSlider
          imagesUrl={[
            "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfcfb61d5cd.png",
          ]}
        />
      </SlideWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracaran</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580,00</Price>
          </Rent>
        </Details>

        <Accessories
          accessories={[
            { name: "380Km/h", icon: "speed" },
            { name: "3.2s", icon: "acceleration" },
            { name: "800HP", icon: "force" },
            { name: "Auto", icon: "exchange" },
            { name: "Gasolina", icon: "gasoline" },
            { name: "2 pessoas", icon: "people" },
          ]}
        />

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button>Escolher período do aluguel</Button>
      </Footer>
    </Wrapper>
  );
}
