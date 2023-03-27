import { HTMLProps, FC, ReactElement } from 'react'
import { Button } from './styles'

interface DefaultButtonProps extends HTMLProps<HTMLButtonElement> {
  text?: string
  icon?: ReactElement
  type?: 'button' | 'submit' | 'reset' | undefined
}

const DefaultButton: FC<DefaultButtonProps> = (props) => {
  const { text, icon, type, onClick } = props
  return (
    <Button onClick={onClick} type={type} disabled={props.disabled}>
      {icon && icon} {text}
    </Button>
  )
}

export default DefaultButton
