import * as S from './styles'
import { useEffect, useState } from 'react'
import TimerControllers from './TimerControllers'

const Timer = () => {
    const timeTarget = 3
    const [timeRemaining, setTimeRemaining] = useState(timeTarget)
    const [running, setRunning] = useState(true)

    const getTimeString = (totalTime: number): string => {
        const minutes = 60
        const hours = 60 * minutes

        const timeHours = Math.floor(totalTime / hours)
        const timeMinutes = Math.floor((totalTime % hours) / minutes)
        const timeSeconds = Math.floor(totalTime % minutes)

        const hoursString = timeHours > 9 ? timeHours : '0' + timeHours
        const minutesString = timeMinutes > 9 ? timeMinutes : '0' + timeMinutes
        const secondsString = timeSeconds > 9 ? timeSeconds : '0' + timeSeconds

        if(timeMinutes === 0)
            return `${secondsString}s`

        if(timeHours === 0)
            return `${minutesString}:${secondsString}`

        return `${hoursString}:${minutesString}:${secondsString}`
    }

    useEffect(() => {
        const decreaseSecond = setInterval(() => {
            if(running) setTimeRemaining(timeRemaining - 1)
        }, 1000)

        return () => clearInterval(decreaseSecond)
    })

    useEffect(() => {
        if(timeRemaining === 0) {
            setRunning(false)
        }
    }, [timeRemaining])

    return (
        <S.Wrapper>
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

            <TimerControllers />
        </S.Wrapper>
    )
}

export default Timer