import styled from "styled-components";
import { primaryColorDark } from "static/colors";

const ChangeUser = styled.span`
  display: flex;
  align-items: center;
  padding: 0 4rem;
  margin-right: -1.5rem;
  height: 4rem;
  min-width: 14rem;
  background-color: ${primaryColorDark};
  cursor: pointer;

  && strong {
    text-align: center;
    width: 100%;
  }
`;

export default ChangeUser;
