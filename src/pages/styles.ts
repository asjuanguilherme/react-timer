import styled from 'styled-components'
import { selectedTheme, themes } from '../styles/theme'
import { FaClock } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
`

export const Header = styled.main`
    padding: 1.5rem 0;
`

export const Main = styled.main`
    padding: 1.5rem 0;
`

export const Footer = styled.footer`
    padding: 1.5rem 0;
`

export const Title = styled.h1`
    user-select: none;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${themes[selectedTheme]};
    display: flex;
    align-items: center;
    
    @media screen and (min-width: 480px ){
        font-size: 3rem;
    }
`

export const ClockIcon = styled(FaClock)`
    margin-left: .5rem;
`