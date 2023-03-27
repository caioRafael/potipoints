import { FC, Fragment } from 'react'

import * as Dialog from '@radix-ui/react-alert-dialog'
import { Transition } from '@headlessui/react'
import {
  DialogAction,
  DialogActionsContainer,
  DialogCancel,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from './styles'
import { useTheme } from 'styled-components'

interface Props extends Dialog.AlertDialogProps {
  confirmMessage: string
  title: string
  description: string
  onConfirm: () => void
  cancelMessage?: string
  type?: 'default' | 'warning' | 'confirm'
}

const AlertDialog: FC<Props> = ({
  title,
  children,
  cancelMessage,
  confirmMessage,
  onConfirm,
  description,
  open,
  onOpenChange,
  type = 'default',
  ...props
}) => {
  const { colors } = useTheme()

  const confirmColor =
    type === 'default'
      ? colors.primary
      : type === 'warning'
      ? colors.danger
      : colors.success

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Transition.Root show={open} className="absolute">
        <Dialog.Portal>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogOverlay />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogContent>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
              <DialogActionsContainer>
                <DialogCancel>{cancelMessage}</DialogCancel>
                <DialogAction onClick={onConfirm} color={confirmColor}>
                  {confirmMessage}
                </DialogAction>
              </DialogActionsContainer>
            </DialogContent>
          </Transition.Child>
        </Dialog.Portal>
      </Transition.Root>
    </Dialog.Root>
  )
}

export default AlertDialog
