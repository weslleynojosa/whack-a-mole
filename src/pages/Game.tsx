import Mole from "@/components/Mole"
import Timer from "@/components/Timer"
import { Area, Main, Panel, Points, Score, Title } from "@/components/styles/Game.styled"
import { useEffect, useState } from "react"

const Game = () => {
    const [randMole, setRandMole] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [stop, setStop] = useState<boolean>(false)

    useEffect(() => {
        if (!stop) {
            const interval = setInterval(() => {
                randGen()
            }, 800)

            return () => clearInterval(interval)
        }
    }, [stop])

    const handleScore =  () => {
        setScore(score + 10)
    }

    const randGen = () => {
        const newRand = Math.floor(Math.random() * 12)
        setRandMole(newRand)
    }

    const stopGame = () => {
        setStop(true)
    }

    return (
        <Main>
            <Panel>
                <Timer stopGame={stopGame}/>
                <Score>
                    <Title>SCORE</Title>
                    <Points>{score}</Points>
                </Score>
            </Panel>
            <Area>
                {
                    Array(12).fill(0).map((_, index) => {
                        return randMole === index ? 
                        <Mole key={index} score={handleScore} showMole={true}/> : 
                        <Mole  key={index} score={handleScore} showMole={false}/>
                    })
                }
            </Area>
        </Main>
    )

}

export default Game