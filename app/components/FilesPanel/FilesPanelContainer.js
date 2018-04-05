import styled, { css } from "styled-components";
import { backgroundColor } from "static/colors";
import { shadow } from "static/accent";

const FilesPanelContainer = styled.div`
  background-color: ${backgroundColor};
  position: relative;
  padding: 0.5rem;
  width: 100%;
  height: calc(100vh - 240px);
  border-radius: 4px;
  overflow-y: auto;
  word-wrap: break-word;
  box-shadow: ${shadow};

  && > div {
    margin-bottom: 0.5rem;
  }

  && h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  && h3 {
    margin-bottom: 0.75rem;
  }
`;

export default FilesPanelContainer;
