import { Img } from '@/components/styles/Global.styled'
import { GameTitle, GoToLeaderboard, StartGame, StartScreen, Title } from '@/components/styles/Home.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/Game')
  }

  return (
    <StartScreen>
        <GoToLeaderboard>
            <Link href={'/Leaderboard'}>Leaderboard</Link>
        </GoToLeaderboard>
        <GameTitle>
          <Title>Whack-a-Mole</Title>
          <Img src='/assets/WAM_Mole.png'/>
        </GameTitle>
        <StartGame onClick={handleClick}>Start</StartGame>
    </StartScreen>
  )
}
