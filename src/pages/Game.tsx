import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { rankActions } from "@/store/rank-slice"
import { Area, Main, Panel, Points, Score, Title } from "@/components/styles/Game.styled"
import { Result, HighScore, Hint, MaxScore, Name, Next } from "@/components/styles/Result.styled"
import Mole from "@/components/Mole"
import Timer from "@/components/Timer"

const Game = () => {
    const [randMole, setRandMole] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [stop, setStop] = useState<boolean>(false)
    const [highScore, setHighScore] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const { players } = useAppSelector((state) => state.rank)

    const dispatch = useAppDispatch()
    const router = useRouter()

    useEffect(() => {
        if (!stop) {
            const interval = setInterval(() => {
                randGen()
            }, 800)

            return () => clearInterval(interval)
        }
    }, [stop])

    const handleScore =  () => {
        if (!stop) {
            setScore(score + 10)
        }
    }

    const randGen = () => {
        const newRand = Math.floor(Math.random() * 12)
        setRandMole(newRand)
    }

    const stopGame = () => {
        setTimeout(() => {
            setStop(true)
            handleHighScore()
        }, 1000)
    }

    const handleHighScore = () => {
        if (players.length === 0) {
            setHighScore(true)
        } else {
            const isHigher = players.find((player) => player.score < score)
            if (isHigher) {
                setHighScore(true)
            } else {
                setTimeout(() => {
                    router.push('/Home')
                })
            }
        }
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const leaderBoard = () => {
        dispatch(rankActions.add({name: name, score: score}))
        router.push('/Leaderboard')
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
            {stop && highScore ? 
                <Result>
                    <HighScore>NEW HIGH SCORE!</HighScore>
                    <MaxScore>{score}</MaxScore>
                    <Name required value={name} type="text" maxLength={3} onChange={handleName}/>
                    <Hint>Put your initials</Hint>
                    <Next onClick={leaderBoard}>NEXT</Next>
                </Result> 
            : ''}
        </Main>
    )

}

export default Game