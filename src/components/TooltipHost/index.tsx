import { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'

interface TooltipHostProps {
  children: ReactNode
  content: string
  disabled?: boolean
}

const TooltipHost = ({ children, content, disabled }: TooltipHostProps) => {
  return (
    <Tooltip.Provider delayDuration={300} disableHoverableContent={disabled}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div>{children}</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent side="bottom">
            {content}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default TooltipHost
