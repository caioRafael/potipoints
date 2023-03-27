import * as Dialog from '@radix-ui/react-alert-dialog'
import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 20;
  inset: 0;
  background-color: ${({ theme }) => darken(0.4, theme.colors.primary)};
  opacity: 0.5;
`

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  z-index: 50;
  width: clamp(200px, 50%, 600px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`

export const DialogTitle = styled(Dialog.Title)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.color};
`

export const DialogDescription = styled(Dialog.Description)`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.zinc[700]};
`

export const DialogActionsContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.lg};
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`

const ActionButtonStyles = css`
  display: inline-flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 12px 16px;

  font-size: ${({ theme }) => theme.fontSize.sm};
  user-select: none;

  transition: all 0.1s;
`

export const DialogCancel = styled(Dialog.Cancel)`
  ${ActionButtonStyles}

  color: ${(props) => props.theme.colors.color};
  background-color: ${(props) => darken(0.1, props.theme.colors.background)};

  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.colors.background)};
  }
`

export const DialogAction = styled(Dialog.Action)`
  ${ActionButtonStyles}

  color: ${(props) => lighten(0.3, props.color || props.theme.colors.white)};
  background-color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) =>
      darken(0.2, props.color || props.theme.colors.background)};
  }
`

/*
      <Cancel
        className={cx(
          "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
          "bg-purple-600 text-white hover:bg-gray-400 bg-gray-500 transition-colors",
          "border border-transparent",
          "focus:outline-none focus-visible:ring focus-visible:ring-blue focus-visible:ring-opacity-75"
        )}
      >
        {cancelMessage ? cancelMessage : 'Cancelar'}
      </Cancel>
      <Action
        onClick={onConfirm}
        className={cx(
          'bg-blueDark text-gray-200 hover:brightness-105 transition-colors',
          'font-semibold px-2 py-1 rounded-md',
          "focus:outline-none focus-visible:ring focus-visible:ring-blue ring-offset-2 ring-offset-gray-500"
        )}
      >
        {confirmMessage}
      </Action>
    </div>
  </Content>
</Transition.Child>
</Transition.Root> */
