import Home from './pages/index'
import GlobalStyle from './styles/globalStyle'
import ThemeProvider from './contexts/theme'
import TimerProvider from './contexts/timer'

const App = () => {
  return (
    <TimerProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </TimerProvider>
  )
}

export default App
