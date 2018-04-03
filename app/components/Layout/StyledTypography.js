import styled, { css } from "styled-components";

import Typography from "material-ui/Typography";

const StyledTypography = styled(Typography)`
  padding-left: 2rem;
  ${props =>
    props.flex &&
    css`
      flex: 1;
    `};
`;

export default StyledTypography;
