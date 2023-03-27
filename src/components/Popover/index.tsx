import { FC, ReactNode } from 'react'
import * as PopoverPrimitives from '@radix-ui/react-popover'
import { X } from 'phosphor-react'
import { PopoverArrow, PopoverClose, PopoverContent } from './styles'

interface Props {
  disabled?: boolean
  trigger: ReactNode
  children: ReactNode
}

const Popover: FC<Props> = ({ trigger, children, disabled = false }) => (
  <PopoverPrimitives.Root>
    <PopoverPrimitives.Trigger asChild>
      <span>{trigger}</span>
    </PopoverPrimitives.Trigger>
    <PopoverPrimitives.Portal>
      {!disabled && (
        <PopoverContent sideOffset={5}>
          {children}
          <PopoverClose aria-label="Close">
            <X />
          </PopoverClose>
          <PopoverArrow />
        </PopoverContent>
      )}
    </PopoverPrimitives.Portal>
  </PopoverPrimitives.Root>
)

export default Popover
