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

const rankSlice = createSlice({
    name: 'rank',
    initialState,
    reducers: {
        add(state: IRank, action: PayloadAction<Player>) {
            if (state.players.length === 0) {
                state.players.push(action.payload)
            } else {
                if (state.players[state.players.length-1].score < action.payload.score) {
                    const orderRank = [...state.players, action.payload].sort((a,b) => b.score - a.score).slice(0,10)
                    state.players = orderRank
                }
            }
        }
    }
})

export const rankActions = rankSlice.actions;

export default rankSlice;