import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Login Small</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
