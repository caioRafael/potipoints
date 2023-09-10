import styled, { keyframes } from 'styled-components'
import { screens } from '../../../../styles/screens'

interface AverageProps {
  reveled?: boolean
  delay?: number
}

const slideIn = keyframes`
  0% {
    transform: translateY(80px);
  }
  100% {
    transform: translateY(0);
  }
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  position: fixed;
  bottom: 0;

  .lottieAnimation {
    position: absolute;
  }

  .coffeeAnimation {
    position: relative;
    width: 300px;
  }
`

export const AverageContainer = styled.span<AverageProps>`
  display: ${(props) => (props.reveled ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 8px;
  animation: 0.5s ${slideIn} ease-in-out backwards;
  animation-delay: ${(props) => `${props.delay}s`};
  overflow: hidden;

  p,
  h2 {
    font-size: ${(props) => props.theme.fontSize['2xl']};
    font-weight: bold;
  }

  @media ${screens.laptop} {
    h2,
    p {
      font-size: ${(props) => props.theme.fontSize['3xl']};
    }
  }
`
