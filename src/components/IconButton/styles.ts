import { shade } from 'polished'
import styled from 'styled-components'
import { screens } from '../../styles/screens'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  gap: ${({ theme }) => theme.spacing.sm};

  border-radius: ${(props) => props.theme.radius.sm};
  border: 1px solid ${(props) => props.theme.colors.border};

  background: transparent;
  color: ${(props) => props.theme.colors.color};

  &:disabled {
    color: ${(props) => shade(0.1, props.theme.colors.color)};
    background: ${(props) => shade(0.05, props.theme.colors.background)};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transition: 0.3s;
    background-color: ${(props) => props.theme.colors.border};
  }

  @media ${screens.laptop} {
    padding: 12px 16px;
  }
`
