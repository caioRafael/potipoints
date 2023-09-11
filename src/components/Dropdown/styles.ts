import { darken, lighten } from 'polished'
import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { screens } from '../../styles/screens'

export const DropdownButton = styled(DropdownMenu.Trigger)`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: 160%;
  padding: 8px 12px;

  @media ${screens.laptop} {
    width: 150px;
    padding: 12px 16px;
  }

  font-weight: bold;
  user-select: none;

  border-radius: ${(props) => props.theme.radius.sm};
  border: solid 1px ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.color};
  background-color: transparent;

  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  span {
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 160%;
    font-weight: bold;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &[data-state='open'] svg {
    transform: rotate(-180deg);
  }

  :hover {
    background: ${(props) => darken(0.05, props.theme.colors.background)};
  }
`

export const DropdownContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column !important;
  width: var(--radix-dropdown-menu-trigger-width);

  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  overflow: auto;
`

export const DropdownItem = styled(DropdownMenu.Item)`
  z-index: 2;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  color: ${(props) =>
    props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  :hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.title === 'light'
        ? lighten(0.4, props.theme.colors.primary)
        : darken(0.3, props.theme.colors.primary)};
  }
`
