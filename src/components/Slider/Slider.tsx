import React from "react";
import { Icon } from "../Icon";
import { Container, SliderButton, StyledContent } from "./styles";
import { useScrollable } from "./_hooks/useScrollable";


export function SlideSection(props: React.PropsWithChildren) {
  const { ref, leftArrow, rightArrow, scroll, updateScrollButtons } = useScrollable();

  return (
    <Container style={{ position: "relative" }}>
      <SliderButton ref={leftArrow} onClick={() => scroll(-1)}>
        <Icon.ArrowLeft />
      </SliderButton>
      <StyledContent onScroll={updateScrollButtons} ref={ref}>
        {props.children}
      </StyledContent>
      <SliderButton ref={rightArrow} style={{ right: "0", left: "unset" }} onClick={() => scroll(1)}>
        <Icon.ArrowRight />
      </SliderButton>
    </Container>
  );
}
