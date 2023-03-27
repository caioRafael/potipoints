import { CaretDown } from 'phosphor-react'
import { FC, useCallback, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  HeaderContainer,
  HeaderStyles,
  LogoHeader,
  UserDropdown,
  UserDropdownContent,
  UserDropdownItem,
} from './styles'
import Logo from '../../assets/logo-new.svg'
import { useAuth } from '../../hooks/useAuth'
import { AlertDialog, Avatar } from '..'
import { useTheme } from 'styled-components'

const Header: FC = () => {
  const { user, signOut } = useAuth()
  const theme = useTheme()

  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)

  const userNameShort = user?.name.split(' ')[0]

  const handleSignOut = useCallback(async () => {
    signOut('/')
  }, [signOut])

  return (
    <HeaderStyles>
      <HeaderContainer>
        <LogoHeader src={Logo} />
        {user && (
          <DropdownMenu.Root>
            <UserDropdown aria-label={userNameShort}>
              <Avatar src={user.avatar} name={user.name} />
              <span>{userNameShort}</span>
              <CaretDown size={16} weight="bold" />
            </UserDropdown>

            <DropdownMenu.Portal>
              <UserDropdownContent align="start" sideOffset={0}>
                <UserDropdownItem
                  onClick={handleOpen}
                  color={theme.colors.danger}
                >
                  Sair
                </UserDropdownItem>
              </UserDropdownContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        )}
      </HeaderContainer>
      <AlertDialog
        open={open}
        type="warning"
        onOpenChange={setOpen}
        title="Finalizar sessão"
        description="Deseja finalizar a sessão?"
        confirmMessage="Sair"
        cancelMessage="Cancelar"
        onConfirm={handleSignOut}
      />
    </HeaderStyles>
  )
}

export default Header
