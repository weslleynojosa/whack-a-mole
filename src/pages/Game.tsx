import Mole from "@/components/Mole"
import { Area, Main } from "@/components/styles/Game.styled"
import { useEffect, useState } from "react"

const Game = () => {
    const [randMole, setRandMole] = useState<number>(0)
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            randGen()
        }, 800)
        
        return () => clearInterval(interval)
    }, [])

    const handleScore =  () => {
        setScore(score + 10)
        // randGen()
    }

    const randGen = () => {
        const newRand = Math.floor(Math.random() * 12)
        setRandMole(newRand)
    }

    return (
        <Main>
            <span>{'SCORE ' + `${score}`}</span>

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