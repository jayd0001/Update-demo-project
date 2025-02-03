import styled, { css } from "styled-components"

export const Wrapper = styled.div<{ $visible: boolean; $anchor: "top" | "bottom" }>`
  opacity: 0;
  transition: transform 0.2s ease, opacity 0.2s;
  position: absolute;
  visibility: hidden;
  z-index: 1000;
  right: 0;
  color: white;
  min-width: 100%;
  white-space: nowrap;
  min-width: max-content;
  ${(props) =>
    props.$visible &&
    css`
      opacity: 1;
      transform: translateY(0px) !important;
      visibility: visible;
    `}
  ${(props) =>
    props.$anchor === "top" &&
    css`
      top: 100%;
      margin-top: 10px;
      transform: translateY(-10px);
    `}
  ${(props) =>
    props.$anchor === "bottom" &&
    css`
      bottom: 100%;
      margin-bottom: 10px;
      transform: translateY(10px);
    `}
  & > div {
    display: grid;
    background: #15151f;
    border-radius: 10px;
    overflow: hidden;
    padding: 5px;
    gap: 5px;
  }
`
