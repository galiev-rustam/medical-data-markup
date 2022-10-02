import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Styled from "./Styled"

export const Homepage = () => {
  return (
    <Styled.Wrapper>
      <Link to="/editor">
        <Button variant="outlined" size="large">Start</Button>
      </Link>
    </Styled.Wrapper>
  );
};
