import * as S from './styles'
import { getTimeString } from '../../../helpers/time'

type Props = {
    timeRemaining: number;
    timeTarget: number;
}

const TimerProgress = ({timeRemaining, timeTarget} : Props) => {
    return (
        <S.CircularProgress percentage={ (timeRemaining/timeTarget) * 100 } >
            <S.TimeContainer>
                <S.TimeRemaining>
                    { getTimeString(timeRemaining) }
                </S.TimeRemaining>
                <S.Time>
                    { getTimeString(timeTarget) }
                </S.Time>
            </S.TimeContainer>
        </S.CircularProgress>
    )
}

export default TimerProgress