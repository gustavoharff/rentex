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
      </Content>
    </Wrapper>
  );
}
