import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: ${(props) => props.style?.width || '200px'};
  height: 50px;

  z-index: 10;
`

export const ButtonDropdown = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background: transparent;
  border: solid 1px ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};

  color: ${(props) => props.theme.colors.color};

  padding: 0 16px;

  :hover {
    background: ${(props) => darken(0.05, props.theme.colors.background)};
  }
`

export const ContentOptions = styled.div`
  display: flex;
  flex-direction: column !important;
  width: 100%;
  max-height: 300px;

  background: ${(props) => props.theme.colors.background};
  overflow: auto;
`

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 2px;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.3rem;
  font-weight: 500;
  overflow: hidden;
`

interface ListItemProps {
  disabled?: boolean
}

export const ListItem = styled.li<ListItemProps>`
  box-sizing: border-box;
  cursor: pointer;
  list-style: none;
  padding: 16px;
  display: flex;
  align-items: center;

  color: ${(props) =>
    props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  :hover {
    background-color: ${(props) =>
      !props.disabled && lighten(0.4, props.theme.colors.primary)};
  }
`
