import * as S from './styles'
import { useEffect, useState, useContext } from 'react'
import TimerControllers from './TimerControllers'
import TimerProgress from './TimerProgress'
import { TimerContext } from '../../contexts/timer'

const Timer = () => {
    const { targetTime } = useContext(TimerContext)
    const [timeRemaining, setTimeRemaining] = useState(targetTime)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        setTimeRemaining(targetTime)
    }, [targetTime])

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

    const playTimer = () => {
        setRunning(true)
        
        if(timeRemaining === 0)
            resetTimer()
    }
    
    const stopTimer = () => setRunning(false)

    const resetTimer = () => {
        setRunning(false)
        setTimeRemaining(targetTime)
    }

    return (
        <S.Wrapper>
            <TimerProgress
                timeRemaining={timeRemaining}
                targetTime={targetTime}
            />
            <TimerControllers 
                running={running}
                play={playTimer}
                stop={stopTimer}
                reset={resetTimer}
                timeRemaining={timeRemaining}
                targetTime={targetTime}
            />
        </S.Wrapper>
    )
}

export default Timer