import * as S from './styles'
import TimerControllers from './TimerControllers'

const Timer = () => {
    return (
        <S.Wrapper>
            <S.CircularProgress percentage={80} >
                <S.TimeContainer>
                    <S.TimeRemaining>00:04:00</S.TimeRemaining>
                    <S.Time>00:05:00</S.Time>
                </S.TimeContainer>
            </S.CircularProgress>

            <TimerControllers />
        </S.Wrapper>
    )
}

export default Timer