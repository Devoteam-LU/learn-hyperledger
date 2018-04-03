import styled from "styled-components";

import { backgroundColor } from "static/Colors";

const CardContainer = styled.div`
  background: ${backgroundColor};
  @media (min-width: 600px) {
    padding: 0.5rem;
  }
`;

export default CardContainer;
