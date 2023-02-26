import { Dispatch, SetStateAction } from 'react'
import { Container } from './styles'

export interface IRightClickMenu {
  x: number
  y: number
}

export interface IItemMenu {
  key: string | number
  name: string
  action?: () => void
  disabled?: boolean
}

interface RightClickMenuProps {
  position: IRightClickMenu
  visible: boolean
  dismiss: Dispatch<SetStateAction<boolean>>
  items: IItemMenu[]
}

export default function RightClickMenu(props: RightClickMenuProps) {
  const { position, visible, dismiss, items } = props

  const handleClick = () => {
    dismiss(false)
  }

  document.addEventListener('click', handleClick)

  return (
    <>
      {visible && (
        <Container x={position.x} y={position.y}>
          {items.map((item) => (
            <li
              onClick={!item.disabled ? item?.action : undefined}
              data-disabled={item.disabled}
              key={item.key}
            >
              {item.name}
            </li>
          ))}
        </Container>
      )}
    </>
  )
}
