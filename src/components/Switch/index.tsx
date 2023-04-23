import { SwitchProps } from '@radix-ui/react-switch'
import { SwitchRoot, SwitchThumb } from './styles'

interface Props extends SwitchProps {}

const Switch = ({ ...props }: Props) => {
  return (
    <SwitchRoot {...props}>
      <SwitchThumb>
        <div>{props.children}</div>
      </SwitchThumb>
    </SwitchRoot>
  )
}

export default Switch
