import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 2px ${(props) => darken(0.05, props.theme.colors.primary)};
`
