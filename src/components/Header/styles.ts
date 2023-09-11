import styled from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { darken, lighten } from 'polished'
import { screens } from '../../styles/screens'

export const HeaderStyles = styled.header`
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.background};

  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderLight};

  span {
    font-size: 28px;
    font-weight: bold;

    > b {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`

export const LogoHeader = styled.img`
  width: 120px;
  @media ${screens.laptop} {
    width: 180px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media ${screens.laptop} {
    padding: 12px 32px;
  }
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 600;
    color: ${(props) => props.theme.colors.color};
  }
`

export const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
`

export const UserDropdown = styled(DropdownMenu.Trigger)`
  padding: 4px;

  font-size: 16px;
  font-weight: bold;
  user-select: none;

  border-radius: ${(props) => props.theme.radius.md};
  color: ${(props) => props.theme.colors.color};
  outline-color: ${(props) => props.theme.colors.primary};
  background-color: transparent;

  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  span {
    font-size: 16px;
    font-weight: bold;
    user-select: none;
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

export const UserDropdownContent = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column !important;
  width: var(--radix-dropdown-menu-trigger-width);

  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};

  overflow: auto;
`

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  > label {
    display: flex;
    align-items: stretch;
    justify-content: baseline;
    color: white;

    gap: 4px;
    font-size: ${(props) => props.theme.fontSize.base};
  }
`

export const UserDropdownItem = styled(DropdownMenu.Item)`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.xs};

  outline: none;

  &:last-child {
    border-bottom-left-radius: ${(props) => props.theme.radius.md};
    border-bottom-right-radius: ${(props) => props.theme.radius.md};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    border-top-left-radius: ${(props) => props.theme.radius.md};
    border-top-right-radius: ${(props) => props.theme.radius.md};
  }

  color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      lighten(0.2, props.color || props.theme.colors.primary)};
  }
`
