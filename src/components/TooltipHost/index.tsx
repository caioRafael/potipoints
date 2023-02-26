import { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'

interface TooltipHostProps {
  children: ReactNode
  content: string
  disabled?: boolean
}

const TooltipHost = ({ children, content, disabled }: TooltipHostProps) => {
  console.log(disabled)

  return (
    <Tooltip.Provider delayDuration={300} disableHoverableContent={disabled}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span tabIndex={0}>{children}</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          {!disabled && (
            <TooltipContent side="bottom">
              {content}
              <TooltipArrow />
            </TooltipContent>
          )}
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default TooltipHost
