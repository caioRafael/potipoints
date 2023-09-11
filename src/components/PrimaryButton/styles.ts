import { shade } from 'polished'
import styled from 'styled-components'
import { screens } from '../../styles/screens'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  line-height: 160%;
  gap: 8px;

  border-radius: 4px;

  font-size: ${(props) => props.theme.fontSize.base};

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  &:disabled {
    color: ${(props) => shade(0.1, props.theme.colors.background)};
    background: ${(props) => shade(0.05, props.theme.colors.primary)};
    cursor: default;
  }

  &:hover &:not(:disabled) {
    transition: 0.3s;
    opacity: 0.8;
  }

  @media ${screens.laptop} {
    padding: 12px 16px;
  }
`
