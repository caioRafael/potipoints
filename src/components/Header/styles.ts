import styled from "styled-components";

export const HeaderStyles = styled.header`
  
  width: 100vw;
  height: 70px;

  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};

  padding: 12px 16px;

  span {
    font-size: 28px;
    font-weight: bold;

    > b {
      color: ${props => props.theme.colors.secondary}
    }
  }
`

export const LogoHeader = styled.img`
  width: 100px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

`

export const UserContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    p { 
      font-weight: 600;
      color: ${props => props.theme.colors.color}
    }
    
`

export const IconButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
`