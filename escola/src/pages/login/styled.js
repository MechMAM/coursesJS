import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  small {
    font-size: 10pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p``;
