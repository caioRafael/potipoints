import styled from 'styled-components'
import { screens } from '../../../../styles/screens'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  height: 100%;

  padding: 0 16px;
  gap: 8px;
  margin: 16px 16px 0px;

  @media ${screens.laptop} {
    gap: 16px;
    padding: 0 32px;
    margin: 24px 0px;
  }
`
