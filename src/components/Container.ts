import styled from 'styled-components'
import { screens } from '../styles/screens'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;

  @media ${screens.laptop} {
    gap: 16px;
  }
`
