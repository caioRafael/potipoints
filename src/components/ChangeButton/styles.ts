import { darken } from 'polished'
import styled from 'styled-components'
import { screens } from '../../styles/screens'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => props.theme.fontSize.base};
  line-height: 160%;

  width: ${(props) => props.style?.width || '350px'};
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 8px 12px;

  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};

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

  @media ${screens.laptop} {
    padding: 12px 16px;
  }
`
