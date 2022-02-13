import * as S from './styles'
import { useEffect, useState } from 'react'
import TimerControllers from './TimerControllers'
import TimerProgress from './TimerProgress'

const Timer = () => {
    const timeTarget = 300
    const [timeRemaining, setTimeRemaining] = useState(timeTarget)
    const [running, setRunning] = useState(false)

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
        setTimeRemaining(timeTarget)
    }

    return (
        <S.Wrapper>
            <TimerProgress
                timeRemaining={timeRemaining}
                timeTarget={timeTarget}
            />
            <TimerControllers 
                running={running}
                play={playTimer}
                stop={stopTimer}
                reset={resetTimer}
                timeRemaining={timeRemaining}
                timeTarget={timeTarget}
            />
        </S.Wrapper>
    )
}

export default Timer