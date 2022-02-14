import { useState, createContext } from 'react'

export const TimerContext = createContext<any>({})

const TimeProvider = ({children}: any) => {
   const [timerSettings, setTimerSettings] = useState({targetTime: 300})

   const changeTargetTime = (totalTimeSeconds: number) => {
       setTimerSettings({ ...timerSettings, targetTime: totalTimeSeconds })
   }

   return(
      <TimerContext.Provider value={{...timerSettings, changeTargetTime}}>
         {children}
      </TimerContext.Provider>
   )
}

export default TimeProvider