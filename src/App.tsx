import Home from './pages/index'
import GlobalStyle from './styles/globalStyle'
import ThemeProvider from './contexts/theme'

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
