import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type Player = {
    name: string,
    score: number
}

interface IRank {
    players: Player[]   
}

const initialState: IRank = {
    players: []
}

const orderRank = (players: Player[], newPlayer: Player) => {
    return [...players, newPlayer].sort((a,b) => b.score - a.score).slice(0,10)
}

const rankSlice = createSlice({
    name: 'rank',
    initialState,
    reducers: {
        add(state: IRank, action: PayloadAction<Player>) {
            if (state.players.length === 0) {
                state.players.push(action.payload)
            } else if (state.players.length < 10) {
                const order = orderRank(state.players, action.payload)
                state.players = order
            } else {
                const isHigher = state.players.find((player) => player.score < action.payload.score)
                if (isHigher) {
                    const order = orderRank(state.players, action.payload)
                    state.players = order.slice(0,10)
                }
            }
        }
    }
})

export const rankActions = rankSlice.actions;

export default rankSlice;