import React from "react";

import { BackButton } from "_atoms";
import { ImageSlider } from "_molecules";

import { Wrapper, Header, SlideWrapper } from "./styles";

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
    </Wrapper>
  );
}
