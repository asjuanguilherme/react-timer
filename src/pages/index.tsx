import * as S from './styles'
import { useState, useContext } from 'react'
import Timer from '../components/Timer'
import Button from '../components/Button'
import { FaCog } from 'react-icons/fa'
import SettingsModal from '../components/SettingsModal/index'
import { ThemeContext } from '../contexts/theme'

const Home = () => {
    const [settingsModalOpened, setSettingsModalOpened] = useState(false)
    const [timeTarget, setTimeTarget] = useState(300)

    return(
        <>
            <SettingsModal opened={settingsModalOpened} close={() => setSettingsModalOpened(false)}/>
            <S.Container>
                <S.Header>
                    <S.Title> Temporizador <S.ClockIcon /></S.Title>
                </S.Header>
                <S.Main>
                    <Timer timeTarget={timeTarget} />
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