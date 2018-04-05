import styled, { css } from "styled-components";
import { fadedBlack } from "static/colors";
import { transition } from "static/anim";

const LoadingBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${fadedBlack};
  transition: ${transition + ", visibility 0s linear 300ms"};
  opacity: 0;
  visibility: hidden;

  ${props =>
    props.active &&
    css`
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
    `};

  && > div {
    margin-left: calc(50vw - 60px);
    margin-top: calc(40vh - 60px);
  }
  && > img {
    margin-left: calc(50vw - 40px);
    margin-top: calc(40vh - 40px);
  }
`;

export default LoadingBackground;
