import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  & > button {
    opacity: 0;
  }
  &:hover {
    & > button {
      opacity: 0.5;
    }
  }
`

export const SliderButton = styled.button`
  all: unset;
  position: absolute;
  font-size: 24px;
  left: 0px;
  top: 0;
  box-sizing: border-box;
  z-index: 1;
  height: 100%;
  padding: 5px;
  cursor: pointer;
  background: var(--background-color);
  transition: opacity 0.2s;
  opacity: 0.5;
  &:hover {
    opacity: 1 !important;
    background: var(--background-color);
  }
`

export const StyledContent = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  overflow: scroll visible;
  scroll-snap-type: x mandatory;
  transition: height 0.25s ease;

  &::-webkit-scrollbar {
    height: 0em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc33;
  }

  & > * {
    scroll-snap-align: start;
    flex-grow: 0;
    flex-shrink: 0;
  }
`
