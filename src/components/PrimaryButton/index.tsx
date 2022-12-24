import { HTMLProps, FC, ReactElement } from 'react'
import { Button } from './styles'

interface PrimaryButtonProps extends HTMLProps<HTMLButtonElement> {
  text?: string
  icon?: ReactElement
  type?: 'button' | 'submit' | 'reset' | undefined
  width?: number | string
}

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const { text, icon, type, onClick, width } = props
  return (
    <Button
      onClick={onClick}
      type={type}
      style={{
        width,
      }}
      disabled={props.disabled}
    >
      {icon && icon} {text}
    </Button>
  )
}

export default PrimaryButton
