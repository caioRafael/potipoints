import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalOverlay } from './styles'

interface ModalProps {
  onDissmis: () => void
  open: boolean
  title: string
}

const Modal: FC<ModalProps> = (props) => {
  const { title, open, onDissmis } = props
  return (
    <Dialog.Root open={open} onOpenChange={onDissmis}>
      <Dialog.Portal>
        <ModalOverlay />
        <h1>{title}</h1>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
