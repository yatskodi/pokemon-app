import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding: 3em;
  max-width: 1440px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
}
#root {
  background: #abb7bf;
}`;
