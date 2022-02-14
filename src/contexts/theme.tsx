import { useState, createContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { themes } from '../styles/theme'

export const ThemeContext = createContext<any>({})

const ThemeProvider = ({children}: any) => {
   const [theme, setTheme] = useState({color: themes['red']})

   const changeTheme = (themeName: string) => {
       setTheme({ color: themes[themeName] })
   }

   return(
      <ThemeContext.Provider value={{...theme, changeTheme}}>
         <SCThemeProvider theme={theme}>
            { children }
         </SCThemeProvider>
      </ThemeContext.Provider>
   )
}

export default ThemeProvider