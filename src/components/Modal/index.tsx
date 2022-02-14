import * as S from './styles'

type Props = {
    opened: boolean;
    title: string;
    close: () => void;
    children: any;
}

const Modal = ({opened, close, children, title}: Props) => {
    return(
        <S.Wrapper opened={opened} onClick={close}>
            <S.ModalBox onClick={(e) => e.stopPropagation()}>
                <S.BoxHeader>
                    <S.Title>{title}</S.Title>
                    <S.CloseBtn onClick={close}/>
                </S.BoxHeader>
                <S.BoxMain>
                    { children }
                </S.BoxMain>
            </S.ModalBox>
        </S.Wrapper>
    )
}

export default Modal