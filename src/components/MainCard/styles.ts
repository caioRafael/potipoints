import styled from 'styled-components'
import { shade } from 'polished'
import { screens } from '../../styles/screens'

interface MainCardProps {
  reveled: boolean
  hasVote: boolean
}

export const MainCardStyles = styled.div<MainCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  strong {
    margin-top: 4px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    @media ${screens.laptop} {
      font-size: inherit;
    }
  }

  .f {
    visibility: hidden;
  }

  .card-inner {
    transform: ${(props) => (props.reveled ? 'rotateY(180deg)' : '')};

    width: 50px;
    height: 70px;
    transform-style: preserve-3d;
    position: relative;
    transition: all 0.5s;

    @media ${screens.laptop} {
      width: 80px;
      height: 110px;
    }
  }

  .card-front,
  .card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    justify-content: center;
    border-radius: 8px;
    border: solid 2px
      ${(props) =>
        props.hasVote
          ? shade(0.1, props.theme.colors.primary)
          : props.theme.colors.border};
    span {
      font-size: ${(props) => props.theme.fontSize['3xl']};
      font-weight: bold;

      @media ${screens.laptop} {
        font-size: ${(props) => props.theme.fontSize['4xl']};
      }
    }

    width: 100%;
    height: 100%;
    backface-visibility: hidden;

    transition: all 0.2s;
  }

  .card-front {
    background-color: ${(props) => props.theme.colors.background};
    transform: rotateY(180deg);
  }

  .card-back {
    background-color: ${(props) =>
      props.hasVote
        ? props.theme.colors.primary
        : props.theme.colors.background};
    transform: rotateY(0deg);
    -moz-transform: ${(props) =>
      props.reveled ? 'rotateY(90deg)' : 'rotateY(0deg)'};
  }
`
