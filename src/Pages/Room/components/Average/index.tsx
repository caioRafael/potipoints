import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../../../components';
import average from '../../../../utils/average';
import { useRoom } from './../../../../hooks/useRoom';

interface AverageProps {
    
}
 
const Average: FC<AverageProps> = () => {
    const { code } = useParams()
    const { votes, room } = useRoom(code as string)

    const averageVotes = average(votes)

    return (
        <>
            <h2>Média:</h2>
            <Card
                disabled={room?.result_reveled}
            >
                <h1>{averageVotes}</h1>
            </Card>
        </>
    );
}
 
export default Average;