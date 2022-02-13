import * as S from './styles'
import Button from "../../Button"
import { FaPlay, FaPause, FaUndo } from 'react-icons/fa'

type Props = {
    running: boolean;
    timeRemaining: number;
    timeTarget: number;
    play: () => void;
    stop: () => void;
    reset: () => void;
}

const TimerControllers = ({running, timeRemaining, timeTarget, play, stop, reset}: Props) => {
    return(
        <S.Controllers>
            { running ?
                <Button icon={ <FaPause />} onClick={stop} /> :
                <Button icon={ <FaPlay />} onClick={play} /> 
            }
            { (running || (timeRemaining < timeTarget)) &&
                <Button icon={ <FaUndo />} onClick={reset} />
            }
        </S.Controllers>
    )
}

export default TimerControllers