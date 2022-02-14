import * as S from './styles'
import { useState } from 'react'
import Timer from '../components/Timer'
import Button from '../components/Button'
import { FaCog } from 'react-icons/fa'
import SettingsModal from '../components/SettingsModal/index'

const Home = () => {
    const [settingsModalOpened, setSettingsModalOpened] = useState(false)

    return(
        <>
            <SettingsModal opened={settingsModalOpened} close={() => setSettingsModalOpened(false)}/>
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
                        onClick={ () => setSettingsModalOpened(true) }
                    />
                </S.Footer>
            </S.Container>
        </>
    )
}

export default Home