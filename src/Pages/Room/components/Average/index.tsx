import { LottieOptions, useLottie } from 'lottie-react'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../../../components'
import average from '../../../../utils/average'
import { calculateBestOccurrence } from '../../../../utils/calculateBestOccurrence'
import { useRoom } from './../../../../hooks/useRoom'
import { AverageContainer, Container } from './styles'

import Congrats from '../../../../assets/animated/congrats.json'

interface AverageProps {
  reveled?: boolean
}

const Average: FC<AverageProps> = ({ reveled }) => {
  const { code } = useParams()
  const { votes, room } = useRoom(code as string)

  const votesAverage = average(votes)

  const formattedAverageVotes =
    votesAverage !== undefined
      ? new Intl.NumberFormat('pt-BR', {
          maximumFractionDigits: 2,
        }).format(votesAverage)
      : undefined

  const options: LottieOptions = {
    animationData: Congrats,
    className: 'lottieAnimation',
    loop: false,
  }

  const { View: CongratsAnimate, play, stop } = useLottie(options)
  const betterAcceptance = calculateBestOccurrence(votes)?.betterAcceptance
  const isCoffeeTime = calculateBestOccurrence(votes)?.coffeeTime

  useEffect(() => {
    if (room?.result_reveled && votesAverage === Number(betterAcceptance)) {
      play()
    } else if (room?.result_reveled && isCoffeeTime) {
      play()
    } else {
      stop()
    }
  }, [
    room?.result_reveled,
    votesAverage,
    betterAcceptance,
    isCoffeeTime,
    play,
    stop,
  ])

  return (
    <Container>
      {CongratsAnimate}
      {betterAcceptance !== '' && (
        <AverageContainer reveled={reveled}>
          <h2>Escolha sugerida:</h2>
          <Card aria-readonly={room?.result_reveled}>{betterAcceptance}</Card>
        </AverageContainer>
      )}
      {!!votesAverage && (
        <AverageContainer reveled={reveled} delay={0.2}>
          <h2>Média:</h2>
          <p>{formattedAverageVotes}</p>
        </AverageContainer>
      )}
      {isCoffeeTime && (
        <AverageContainer reveled={reveled} delay={0.2}>
          Hora do café!
        </AverageContainer>
      )}
    </Container>
  )
}

export default Average
