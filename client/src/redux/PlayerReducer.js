import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players : [],
  time: 300000,
}

export const applydoPlayersChange = createSlice({
  name: 'PLAYER',
  initialState,
  reducers: {
    doGetAllPlayers : (state, action) => {
      state.players = action.payload;
    },
    doDeletePlayer : (state, action) => {
      const NewListPlayers = state.players.filter((player) => player.id !== parseInt(action.payload))
      state.players = NewListPlayers;
      alert('Deleted successfully')
    },
    doChangeTime : (state, action) => {
      state.time = action.payload;
      let minutes = state.time / 60000;
      alert(`הזמן שונה ל ${minutes} דקות`)
    },
  }
})

export const { doGetAllPlayers, doDeletePlayer, doChangeTime } = applydoPlayersChange.actions

export default applydoPlayersChange.reducer
