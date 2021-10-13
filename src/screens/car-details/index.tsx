import React from "react";

import { BackButton } from "_atoms";
import { ImageSlider } from "_molecules";

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
  About
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Wrapper>
  );
}
