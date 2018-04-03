import styled, { css } from "styled-components";
import {
  accentColor,
  primaryColor,
  text,
  backgroundColor
} from "static/colors";
import { transition } from "static/anim";

const Form = styled.form`
  position: relative;
  text-align: center;
  height: 16rem;
  outline: 1px dotted;
  outline-offset: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${transition};
  background: ${backgroundColor};

  &&:hover {
    outline-offset: -1.2rem;
    background: ${primaryColor};
    ${props =>
      props.valid &&
      css`
        background: ${accentColor};
      `};
    color: ${text};
  }

  && p {
    margin: 0;
  }

  && input {
    position: absolute;
    left: 0;
    width: 100%;
    height: 16rem;
    outline: none;
    opacity: 0;
    padding: 0 2rem;
    cursor: pointer;
  }

  ${props =>
    props.valid &&
    css`
      background: ${accentColor};
      color: ${text};
      outline-offset: -0.8rem;
    `};
`;

export default Form;
