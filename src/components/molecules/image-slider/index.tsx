import React from "react";

import { Wrapper, Indexs, Index, ImageWrapper, Image } from './styles';

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <Wrapper>
      <Indexs>
        <Index active />
        <Index active={false} />
        <Index active={false} />
        <Index active={false} />
      </Indexs>

      <ImageWrapper>
        <Image source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </ImageWrapper>
    </Wrapper>
  );
}
