import styled, { css } from 'styled-components'
import { selectedTheme, themes } from '../../styles/theme'

const getProgress = (percentage: number) => {
    const colorBackground = '#f5f5f5'
    const direction = percentage < 51 ? 'right' : 'left'
    const color = percentage < 51 ? colorBackground : themes[selectedTheme]
    const deg = 90 + (3.6 * percentage) + 'deg'

    return css`
        background: 
            linear-gradient(
                to ${direction},
                ${color} 50%,
                transparent 50%
            ), linear-gradient(
                ${deg},
                ${themes[selectedTheme]} 50%,
                ${colorBackground} 50%
            );
    `
} 

export const Wrapper = styled.div`
    user-select: none;
`

export const CircularProgress = styled.div<{percentage: number}>`
    height: 250px;
    width: 250px;
    border-radius: 125px;
    padding: 28px;
    box-shadow: inset 2px 3px .7rem rgba(0,0,0,.2);

    ${ props => getProgress(props.percentage)};
` 

export const TimeContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #c1c1c1;
    box-shadow: 3px 2px .5rem rgba(0,0,0,.15);
    border: 1px solid white;
`

export const TimeRemaining = styled.span`
    font-size: 2rem;
    font-weight: bold;
    color: ${themes[selectedTheme]};
    
    @media screen and (min-width: 480px){
        font-size: 2.5rem;
    }
`

export const Time = styled.span`
    font-size: 1rem;
    font-weight: bold;
`