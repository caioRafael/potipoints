import { darken } from 'polished'
import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  width: ${(props) => props.style?.width || '350px'};
  height: 50px;

  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: 5px;

  background: transparent;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }

  :disabled {
    background-color: ${(props) => darken(0.05, props.theme.colors.background)};
    color: ${(props) => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`
