import { FC, useCallback, useState } from "react";
import { ButtonDropdown, Container, ContentOptions, DropDownList, ListItem } from "./styles";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

export interface DropdownItem {
  name: string
  value: number
  disabled?: boolean
}

interface DropdownProps {
  list: DropdownItem[]
  item: DropdownItem
  setItem: (item: DropdownItem) => void
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { list, item, setItem } = props
  const [viewOptions, setViewOptions] = useState<boolean>(false)

  const openDropdown = useCallback(() => {
    setViewOptions(!viewOptions)
  }, [viewOptions])

  const selectItem = useCallback((item: DropdownItem) => {
    setItem(item)
    setViewOptions(false)
  }, [item])

  return (
    <Container>
      <ButtonDropdown
        onClick={openDropdown}
      >
        {viewOptions ?
          <AiOutlineUp size={15} style={{ marginRight: 10 }} />
          :
          <AiOutlineDown size={15} style={{ marginRight: 10 }} />
        }
        {item.name}
      </ButtonDropdown>
      {viewOptions &&
        <ContentOptions>
          <DropDownList>
            {list.map(item => (
              <ListItem
                key={item.value}
                disabled={item.disabled}
                onClick={item.disabled ? undefined : () => selectItem(item)}
              >
                {item.name}
              </ListItem>
            ))}
          </DropDownList>
        </ContentOptions>
      }
    </Container>
  );
}


export default Dropdown;