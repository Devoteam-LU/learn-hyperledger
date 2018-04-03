import styled from "styled-components";

const CardExpander = styled.div`
  position: relative;
  min-height: calc(100vh - (7rem));
  padding: 1rem;
  overflow: hidden;

  @media (min-width: 600px) {
    min-height: calc(100vh - (9rem));
  }
`;

export default CardExpander;
