import { darken, lighten } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

export const InputContainer = styled.div`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};

  width: 280px;
`

export const InputRoomCode = styled.input`
  height: 100%;

  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;

  ::placeholder {
    color: ${(props) => lighten(0.2, props.theme.colors.color)};
  }
  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.sm};
  background: transparent;

  outline: 0;

  color: ${(props) => props.theme.colors.color};

  padding: 0 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  gap: ${(props) => props.theme.spacing.sm};
`

export const LinkTo = styled(Link)`
  margin-top: ${(props) => props.theme.spacing.lg};
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

export const Logo = styled.img`
  width: 280px;
`
