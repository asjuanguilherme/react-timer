import Modal from '../Modal'
import * as S from './styles'

type Props = {
    opened: boolean;
    close: () => void;
}

const SettingsModal = ({opened, close}: Props) => {
    return(
        <Modal title="Configurações" opened={opened} close={close} >
            <S.Section>
                <S.SectionTitle>Tempo</S.SectionTitle>
            </S.Section>

            <S.Section>
                <S.SectionTitle>Tema</S.SectionTitle>
            </S.Section>
        </Modal>
    )
}

export default SettingsModal