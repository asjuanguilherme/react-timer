import { useState, useEffect, createContext } from 'react'

export const TimerContext = createContext<any>({})

const TimeProvider = ({children}: any) => {
   if(!localStorage.getItem('TARGET_TIME')) {
      localStorage.setItem('TARGET_TIME', '300')
   }

   const [timerSettings, setTimerSettings] = useState({targetTime: parseInt(localStorage.getItem('TARGET_TIME') || '300')})

   useEffect(() => {
      localStorage.setItem('TARGET_TIME', timerSettings.targetTime.toString() )
   }, [timerSettings])


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