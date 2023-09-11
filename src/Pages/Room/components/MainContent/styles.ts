import styled from 'styled-components'
import { screens } from '../../../../styles/screens'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1px;
  gap: ${({ theme }) => theme.spacing.md};

  width: 100%;

  @media ${screens.laptop} {
    padding: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100px;
  height: 120px;

  strong {
    margin-top: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 2px;
    width: 80px;
    height: 100px;
    border-radius: 5px;

    border: solid 1px ${(props) => props.theme.colors.border};
  }
`
