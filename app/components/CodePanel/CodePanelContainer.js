import styled, { css } from "styled-components";
import { primaryText, text, backgroundColor } from "static/colors";
import { transition } from "static/anim";

const CodePanelContainer = styled.pre`
  position: relative;
  background-color: ${primaryText} !important;
  color: ${text};
  width: 100%;
  height: calc(100vh - 240px);
  margin: 0 !important;
  border: none !important;
  border-radius: 4px !important;

  && code {
    background: ${primaryText};
    color: ${text};
    border: none;
  }
`;

export default CodePanelContainer;
