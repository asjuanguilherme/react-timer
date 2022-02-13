import * as S from './styles'
import Button from "../../Button"
import { FaPlay, FaPause, FaUndo } from 'react-icons/fa'

const TimerControllers = () => {
    return(
        <S.Controllers>
            <Button icon={ <FaPlay />} />
            <Button icon={ <FaPause />} />
            <Button icon={ <FaUndo />} />
        </S.Controllers>
    )
}

export default TimerControllers