import { shade } from 'polished'
import styled from 'styled-components'
import { screens } from '../../styles/screens'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  gap: ${({ theme }) => theme.spacing.sm};

  width: 100%;
  max-width: 300px;

  border-radius: ${(props) => props.theme.radius.lg};
  border: 1px solid ${(props) => props.theme.colors.border};

  background: transparent;
  color: ${(props) => props.theme.colors.color};

  &:disabled {
    color: ${(props) => shade(0.1, props.theme.colors.background)};
    background: ${(props) => shade(0.05, props.theme.colors.primary)};
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
