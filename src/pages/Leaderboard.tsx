import { Board, Head, NewGame, Table } from "@/components/styles/Leaderboard.styled"
import { useAppSelector } from "@/store/hooks"
import { useRouter } from "next/router"

const LeaderBoard = () => {
    const { players } = useAppSelector((state) => state.rank)
    const router = useRouter()

    const handleClick = () => {
        router.push('/Game')
    }

    return (
        <Board>
            <Head>
                <h1>LEADERBOARD</h1>
                <NewGame onClick={handleClick}>NEW GAME</NewGame>
            </Head>
            <Table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Score</th>
                        <th>Name</th>
                    </tr>
                    {players.map((player, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{player.score}</td>
                                <td>{player.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Board>
    )

}

export default LeaderBoard