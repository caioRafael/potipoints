import { FC, useCallback } from 'react'
import { DropdownButton, DropdownContent, DropdownItem } from './styles'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CaretDown } from 'phosphor-react'

export interface IDropdownItem {
  name: string
  value: number
  disabled?: boolean
}

interface DropdownProps {
  list: IDropdownItem[]
  config: IDropdownItem
  onItemClick: (item: IDropdownItem) => void
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { list, config, onItemClick } = props

  const selectItem = useCallback(
    (item: IDropdownItem) => {
      onItemClick(item)
    },
    [onItemClick],
  )

  return (
    <DropdownMenu.Root>
      <DropdownButton
        asChild
        aria-label={config.name}
        disabled={config.disabled}
      >
        <button>
          <CaretDown size={16} weight="bold" />
          <span>{config.name}</span>
        </button>
      </DropdownButton>

      <DropdownMenu.Portal>
        <DropdownContent align="start" sideOffset={2}>
          {list.map((item) => (
            <DropdownItem
              key={item.value}
              disabled={item.disabled}
              onClick={item.disabled ? undefined : () => selectItem(item)}
            >
              {item.name}
            </DropdownItem>
          ))}
        </DropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Dropdown
