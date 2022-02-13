export const getTimeString = (totalTime: number): string => {
    const minutes = 60
    const hours = 60 * minutes

    const timeHours = Math.floor(totalTime / hours)
    const timeMinutes = Math.floor((totalTime % hours) / minutes)
    const timeSeconds = Math.floor(totalTime % minutes)

    const hoursString = timeHours > 9 ? timeHours : '0' + timeHours
    const minutesString = timeMinutes > 9 ? timeMinutes : '0' + timeMinutes
    const secondsString = timeSeconds > 9 ? timeSeconds : '0' + timeSeconds

    if(timeMinutes === 0)
        return `${secondsString}s`

    if(timeHours === 0)
        return `${minutesString}:${secondsString}`

    return `${hoursString}:${minutesString}:${secondsString}`
}