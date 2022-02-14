import styled, { css } from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const closedModal = css`
    visibility: hidden;
    opacity: 0;
`

const openedModal = css`
    visibility: visible;
    opacity: 1;
`

export const Wrapper = styled.div<{opened: boolean}>`
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    background: rgba(0,0,0,.3);
    backdrop-filter: blur(6px);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
    transition-property: opacity, visibility;

    ${ props => props.opened? openedModal : closedModal }
`

export const ModalBox = styled.div`
    user-select: none;
    width: 100%;
    min-width: 300px;
    max-width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    overflow: hidden;
`

export const BoxHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: .75rem 1rem;
    color: ${props => props.theme.color};
`

export const Title = styled.h2`
    
`

export const BoxMain = styled.div`
    width: 100%;
    background-color: white;
    padding: .75rem 1rem;
`

export const CloseBtn = styled(FaTimes)`
    color: #c1c1c1;
    transition: .1s;
    cursor: pointer;
    font-size: 1.2rem;

    &:hover {
        color: #D71010;
    }
`