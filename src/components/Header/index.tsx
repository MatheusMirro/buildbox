import React from "react";

import { Container, Head, Title, SubText } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Head>
        <Title>buildbox</Title>
        <SubText>WEB CHALLENGE</SubText>
      </Head>
    </Container>
  );
};

export default Header;
