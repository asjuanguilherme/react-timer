import * as S from './styles'
import Timer from '../components/Timer'
import Button from '../components/Button'
import { FaCog } from 'react-icons/fa'

const Home = () => {
    return(
        <S.Container>
            <S.Header>
                <S.Title> Countdown Timer <S.ClockIcon /></S.Title>
            </S.Header>
            <S.Main>
                <Timer />
            </S.Main>
            <S.Footer>
                <Button
                    label="Configurações"
                    icon={<FaCog />}
                    onClick={ () => alert('olá mundo') }
                />
            </S.Footer>
        </S.Container>
    )
}

export default Home