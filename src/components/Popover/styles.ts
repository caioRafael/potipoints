import * as Popover from '@radix-ui/react-popover'
import { darken } from 'polished'
import styled from 'styled-components'

export const PopoverContent = styled(Popover.Content)`
  display: flex;
  flex-direction: column !important;
  width: var(--radix-dropdown-menu-trigger-width);
  padding: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing['3xl']};

  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  overflow: auto;
`

export const PopoverClose = styled(Popover.Close)`
  font-family: inherit;
  border-radius: 100%;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.color};
  position: absolute;
  top: 5px;
  right: 5px;

  :hover {
    background-color: ${({ theme }) => darken(0.2, theme.colors.background)};
  }

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
  }
`

export const PopoverArrow = styled(Popover.Arrow)`
  fill: ${(props) => props.theme.colors.border};
`
