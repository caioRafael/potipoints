import { darken } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  gap: 32px;
`

export const Division = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.border};
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  gap: ${(props) => props.theme.spacing.sm};
`

export const Logo = styled.img`
  width: 280px;
`

export const LinkTo = styled(Link)`
  margin-top: ${(props) => props.theme.spacing.sm};

  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.base};
  text-decoration: none;
  font-weight: bold;

  transition: all 0.2s;

  :hover {
    color: ${(props) => darken(0.05, props.theme.colors.primary)};
    text-decoration: underline;
  }
`
