export const getTimeString = (totalTimeSeconds: number ): string => {
    const minutes = 60
    const hours = 60 * minutes

    const timeHours = Math.floor(totalTimeSeconds / hours)
    const timeMinutes = Math.floor((totalTimeSeconds % hours) / minutes)
    const timeSeconds = Math.floor(totalTimeSeconds % minutes)

    const hoursString = timeHours > 9 ? timeHours : '0' + timeHours
    const minutesString = timeMinutes > 9 ? timeMinutes : '0' + timeMinutes
    const secondsString = timeSeconds > 9 ? timeSeconds : '0' + timeSeconds

    // if(timeMinutes === 0)
    //     return `${secondsString}s`

    // if(timeHours === 0)
    //     return `${minutesString}:${secondsString}`

    return `${hoursString}:${minutesString}:${secondsString}`
}

type TimeObject = {
    hours: number;
    minutes: number;
    seconds: number;
} 

export const getTimeSeconds = (time: TimeObject) => {
    const hoursSeconds = time.hours * 60 * 60
    const minutesSeconds = time.minutes * 60

    return hoursSeconds + minutesSeconds + time.seconds 
}