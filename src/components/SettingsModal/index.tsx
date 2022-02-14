import { useState } from 'react'
import Modal from '../Modal'
import * as S from './styles'
import { themes, selectedTheme } from '../../styles/theme'

type Props = {
    opened: boolean;
    close: () => void;
}

const SettingsModal = ({opened, close}: Props) => {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 5,
        seconds: 0,
    })

    const changeHours = (value: number) => {
        if(value <= 99)
        setTime({...time, hours: value})
    }
    const changeMinutes = (value: number) => {
        if(value < 60)
            setTime({...time, minutes: value})
    }
    const changeSeconds = (value: number) => {
        if(value < 60)
            setTime({...time, seconds: value})
    }

    const renderedThemeOptions = () => {
        const themeOptionsList : any = []

        Object.keys(themes).forEach((themeName: string) => {
            themeOptionsList.push(
                <S.ThemeColor
                    color={themes[themeName]}
                    selected={ selectedTheme === themeName }
                    onClick={ () => alert('click')}
                />
            )
        })

        return themeOptionsList
    }

    
    return(
        <Modal title="Configurações" opened={opened} close={close} >
            <S.Section>
                <S.SectionTitle>Tempo</S.SectionTitle>
                <S.TimerInput>
                    <input
                        type="number"
                        value={time.hours > 9 ? time.hours : '0' + time.hours}
                        onChange={ e => changeHours(parseInt(e.target.value))}
                    />
                    <input
                        type="number"
                        value={time.minutes > 9 ? time.minutes : '0' + time.minutes }
                        onChange={ e => changeMinutes(parseInt(e.target.value))}
                    />
                    <input
                        type="number"
                        value={time.seconds > 9 ? time.seconds : '0' + time.seconds}
                        onChange={ e => changeSeconds(parseInt(e.target.value))}
                    />
                </S.TimerInput>
            </S.Section>

            <S.Section>
                <S.SectionTitle>Tema</S.SectionTitle>
                <S.ThemeColorList>
                    { renderedThemeOptions() }
                </S.ThemeColorList>
            </S.Section>
        </Modal>
    )
}

export default SettingsModal