import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.button<{label: string, block: boolean, icon: any}>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    padding: 0 1.3rem;
    font-size: 1.3rem;
    font-weight: bold;
    width: content;
    
    user-select: none;
    transition: .2s;
    cursor: pointer;
    border-radius: 999px;

    color: white;
    background-color: ${props => props.theme.color};

    &:hover {
        background-color: ${props => darken(0.10, props.theme.color)}
    }

    ${props => props.label && props.icon? 'svg { margin-left: .7rem; };' : '' }
    ${props => props.block? 'max-width: 100%; width: 100%;' : '' }
    ${props => props.icon && props.label === '' ? 'width: 3rem; padding: 0;' : ''}
`