import { LottieOptions, useLottie } from 'lottie-react';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../../../components';
import average from '../../../../utils/average';
import calculateBestOccurrence from '../../../../utils/calculateBestOccurrence'
import { useRoom } from './../../../../hooks/useRoom';
import { AverageContainer, Container } from './styles';

import Congrats from '../../../../assets/animated/congrats.json'

interface AverageProps {
  reveled?: boolean;
}

const Average: FC<AverageProps> = ({ reveled }) => {
  const { code } = useParams()
  const { votes, room } = useRoom(code as string)

  const votesAverage = average(votes)

  const formattedAverageVotes = votesAverage
    ? new Intl.NumberFormat('pt-BR', {
      maximumFractionDigits: 2
    }).format(votesAverage)
    : undefined

  const options: LottieOptions = {
    animationData: Congrats,
    className: 'lottieAnimation',
    loop: false,
  }

  const { View: CongratsAnimate, play, stop } = useLottie(options)
  const betterAcceptance = calculateBestOccurrence(votes)

  useEffect(() => {
    if (room?.result_reveled && votesAverage === Number(betterAcceptance)) {
      play()
    } else {
      stop()
    }
  }, [room?.result_reveled, votesAverage, betterAcceptance])

  return (
    <Container>
      {CongratsAnimate}
      <AverageContainer reveled={reveled}>
        <h2>Melhor escolha:</h2>
        <Card
          aria-readonly={room?.result_reveled}
        >
          <h1>{betterAcceptance}</h1>
        </Card>

      </AverageContainer>
      {votesAverage && (
        <AverageContainer reveled={reveled} delay={0.2}>
          <h2>Média:</h2>
          <p>{formattedAverageVotes}</p>
        </AverageContainer>
      )
      }
    </Container >
  );
}

export default Average;