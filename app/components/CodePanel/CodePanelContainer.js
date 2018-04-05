import styled, { css } from "styled-components";
import {
  primaryText,
  text,
  backgroundColor,
  primaryColorLight
} from "static/colors";
import { shadow } from "static/accent";

const CodePanelContainer = styled.pre`
  position: relative;
  background-color: ${primaryText} !important;
  color: ${text};
  width: 100%;
  height: calc(100vh - 240px);
  margin: 0 !important;
  border: none !important;
  border-radius: 4px !important;
  box-shadow: ${shadow};
  font-size: 0.75rem;

  && code {
    background: ${primaryText};
    color: ${text};
    border: none;
  }

  && .token.string {
    color: ${primaryColorLight};
  }
`;

export default CodePanelContainer;
