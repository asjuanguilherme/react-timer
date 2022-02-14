import * as S from './styles'
import { getTimeString } from '../../../helpers/time'

type Props = {
    timeRemaining: number;
    targetTime: number;
}

const TimerProgress = ({timeRemaining, targetTime} : Props) => {
    return (
        <S.CircularProgress percentage={ (timeRemaining/targetTime) * 100 } >
            <S.TimeContainer>
                <S.TimeRemaining>
                    { getTimeString(timeRemaining) }
                </S.TimeRemaining>
                <S.Time>
                    { getTimeString(targetTime) }
                </S.Time>
            </S.TimeContainer>
        </S.CircularProgress>
    )
}

export default TimerProgress