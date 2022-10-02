import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Styled from './Styled'

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  }

  return (
    <Styled.Wrapper>
      <Styled.Header>404</Styled.Header>
      <Styled.SubHeader>Oops! Something wrong…</Styled.SubHeader>

      <Styled.Section>
        <Button
          variant="outlined"
          size="large"
          onClick={handleClickBack}
        >Go back</Button>

        <Link to="/">
          <Button variant="outlined" size="large" color="info">HOMEPAGE</Button>
        </Link>

      </Styled.Section>
    </Styled.Wrapper>
  );
};
