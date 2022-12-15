import { SignOut } from "phosphor-react"
import { FC, useCallback, useContext } from "react"
import { ThemeContext } from "styled-components"
import { HeaderContainer, HeaderStyles, IconButton, LogoHeader, UserContent } from "./styles"
import Logo from '../../assets/logo.svg'
import { useAuth } from "../../hooks/useAuth"
import { Avatar } from ".."

const Header: FC = () => {
  const { colors } = useContext(ThemeContext)

  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(async () => {
    if (window.confirm('Você será deslogado do sistema!')) {
      signOut('/')
    }
  }, [signOut])

  return (
    <HeaderStyles>
      <HeaderContainer>
        <LogoHeader src={Logo} />
        {user && (
          <UserContent>
            <Avatar
              src={user.avatar}
              name={user.name}
            />
            <p>{user.name}</p>
            <IconButton onClick={handleSignOut}>
              <SignOut size={24} color={colors.primary} />
            </IconButton>
          </UserContent>
        )}
      </HeaderContainer>
    </HeaderStyles>
  )
}

export default Header