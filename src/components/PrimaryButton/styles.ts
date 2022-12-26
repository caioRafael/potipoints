import { shade } from 'polished'
import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  width: ${(props) => props.style?.width || '350px'};
  height: 50px;

  border-radius: 5px;

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};

  &:disabled {
    color: ${(props) => shade(0.1, props.theme.colors.background)};
    background: ${(props) => shade(0.05, props.theme.colors.primary)};
    cursor: default;
  }

  &:hover &:not(:disabled) {
    transition: 0.3s;
    opacity: 0.8;
  }
`
