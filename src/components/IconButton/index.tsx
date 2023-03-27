import { HTMLProps, FC, ReactElement } from 'react'
import { Button } from './styles'

interface IconButtonProps extends HTMLProps<HTMLButtonElement> {
  icon: ReactElement
  type?: 'button' | 'submit' | 'reset' | undefined
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, type, onClick } = props
  return (
    <Button onClick={onClick} type={type} disabled={props.disabled}>
      {icon}
    </Button>
  )
}

export default IconButton
