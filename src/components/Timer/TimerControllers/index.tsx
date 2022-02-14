import * as S from './styles'
import Button from "../../Button"
import { FaPlay, FaPause, FaUndo } from 'react-icons/fa'

type Props = {
    running: boolean;
    timeRemaining: number;
    targetTime: number;
    play: () => void;
    stop: () => void;
    reset: () => void;
}

const TimerControllers = ({running, timeRemaining, targetTime, play, stop, reset}: Props) => {
    return(
        <S.Controllers>
            { running ?
                <Button icon={ <FaPause />} onClick={stop} /> :
                <Button icon={ <FaPlay />} onClick={play} /> 
            }
            { (running || (timeRemaining < targetTime)) &&
                <Button icon={ <FaUndo />} onClick={reset} />
            }
        </S.Controllers>
    )
}

export default TimerControllers