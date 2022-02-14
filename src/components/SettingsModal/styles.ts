import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Section = styled.div`
    margin-bottom: 1rem;
`

export const SectionTitle = styled.h3`
    margin-bottom: .5rem;
`

export const TimerInput = styled.div`
    input {
        background-color: #eeeeee;
        border-radius: .3rem;
        width: 3rem;
        height: 2.5rem;
        font-size: 1.5rem;
        margin-right: .5rem;
        padding-left: .6rem;
        font-weight: bold;
        color: #adadad;
    }
`

const SelectedThemeColor = (color: string) => css`
    box-shadow: 0 0 0 .3rem ${lighten(.35, color)};
`

export const ThemeColorList = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`

export const ThemeColor = styled.li<{selected?: boolean, color: string}>`
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: ${props => props.color};
    margin-right: .75rem;
    margin-bottom: .75rem;
    cursor: pointer;

    ${ props => props.selected && SelectedThemeColor(props.color) }
`