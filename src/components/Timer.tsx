import { useEffect, useState } from "react"
import { StopWatch } from "./styles/Game.styled"

type GameProps = {
    stopGame: Function
}

const Timer = (props: GameProps) => {
    const [seconds, setSeconds] = useState<number>(120)
    const [warn, setWarn] = useState<boolean>(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000)

        if (seconds === 0) {
            clearInterval(interval)
            setWarn(true)
            props.stopGame()
        }

        return () => clearInterval(interval)
    }, [seconds])

    const formatTime = (inputSeconds: number):string => {
        const minutes = Math.floor(inputSeconds / 60)
        const seconds = inputSeconds % 60
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }

    return (
        <>
            { !warn ? <StopWatch>{formatTime(seconds)}</StopWatch> : <StopWatch>Time's up</StopWatch>}
        </>
    )

}

export default Timer