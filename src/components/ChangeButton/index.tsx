import { FC, ReactElement } from 'react'
import { Button } from './styles'

interface ChangeButtonProps {
  text?: string
  icon?: ReactElement
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  width?: number | string
  disabled?: boolean
}

const ChangeButton: FC<ChangeButtonProps> = (props) => {
  const { text, icon, type, onClick, width, disabled = false } = props
  return (
    <Button
      onClick={onClick}
      type={type}
      style={{
        width,
      }}
      disabled={disabled}
    >
      {icon && icon} {text}
    </Button>
  )
}

export default ChangeButton
