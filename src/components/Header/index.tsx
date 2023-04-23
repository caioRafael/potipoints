import { CaretDown, Moon, SunDim } from 'phosphor-react'
import { FC, useCallback, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  HeaderContainer,
  HeaderStyles,
  LogoHeader,
  UserDropdown,
  UserDropdownContent,
  UserDropdownItem,
  UserSection,
} from './styles'
import Logo from '../../assets/logo-new.svg'
import { useAuth } from '../../hooks/useAuth'
import { AlertDialog, Avatar, Switch } from '..'
import { useTheme } from 'styled-components'
import { useThemeMode } from '../../hooks/useThemeMode'

const Header: FC = () => {
  const { user, signOut } = useAuth()
  const theme = useTheme()
  const { mode, changeMode } = useThemeMode()

  const isDark = mode === 'dark'
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => setOpen(true)

  const onCheckChange = (checked: boolean) => {
    changeMode(checked ? 'dark' : 'light')
  }

  const userNameShort = user?.name.split(' ')[0]

  const handleSignOut = useCallback(async () => {
    signOut('/')
  }, [signOut])

  return (
    <HeaderStyles>
      <HeaderContainer>
        <LogoHeader src={Logo} />

        {user && (
          <UserSection>
            <Switch checked={isDark} onCheckedChange={onCheckChange}>
              {isDark ? (
                <Moon size={20} weight="fill" />
              ) : (
                <SunDim size={20} weight="fill" />
              )}
            </Switch>
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
          </UserSection>
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
