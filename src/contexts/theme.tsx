import { useState, useEffect, createContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { themes } from '../styles/theme'

export const ThemeContext = createContext<any>({})

const ThemeProvider = ({children}: any) => {
   if(!localStorage.getItem('THEME_COLOR')) {
      localStorage.setItem('THEME_COLOR', themes['lightBlue'])
   }

   const [theme, setTheme] = useState({color: localStorage.getItem('THEME_COLOR') || themes['lightBlue']})

   useEffect(() => {
      localStorage.setItem('THEME_COLOR', theme.color )
   }, [theme])

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