import { darken } from 'polished'
import styled from 'styled-components'
import { screens } from '../../styles/screens'
import { User } from 'phosphor-react'

export const UserIcon = styled(User)`
  width: 24px;
  height: 24px;

  @media ${screens.laptop} {
    width: 32px;
    height: 32px;
  }
`

export const Container = styled.div`
  .AvatarRoot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: solid 2px ${(props) => darken(0.05, props.theme.colors.primary)};
    width: 32px;
    height: 32px;

    @media ${screens.laptop} {
      width: 50px;
      height: 50px;
    }
  }

  .AvatarImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .AvatarFallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: 1;
    font-weight: 700;

    @media ${screens.laptop} {
      font-size: 20px;
    }
  }
`
