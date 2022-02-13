import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        font-family: 'Roboto Condensed', sans-serif;
    }
    
    #root {
        width: 100%;
    }
`

export default GlobalStyle