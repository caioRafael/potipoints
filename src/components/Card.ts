import { darken, shade } from 'polished'
import styled from 'styled-components'

interface CardProps {
  isCardSelected?: boolean
}

export const Card = styled.button<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 50px;
  height: 70px;

  transform: ${(props) => (props.isCardSelected ? `translateY(-10px)` : '')};
  border: solid 2px
    ${(props) => props.style?.borderColor || props.theme.colors.border};
  border-color: ${(props) =>
    props.isCardSelected
      ? props.theme.colors.primary
      : props.theme.colors.border};
  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.color};

  transition: transform 0.1s ease-out;

  cursor: pointer;

  &:disabled {
    color: ${(props) => shade(0.1, props.theme.colors.color)};
    border-color: ${(props) => shade(0.05, props.theme.colors.border)};
    background: ${(props) => darken(0.05, props.theme.colors.background)};
    cursor: not-allowed;
  }
`
