import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  liked: any
}
const initialState: InitialState = {
  liked: [],
}

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    likedArea(state, action) {
      state.liked = [...state.liked, action.payload]
    },
    unLikedArea(state, action) {
      state.liked.filter((item: any) => item.stationName !== action.payload.stationName)
    },
  },
})
export const bookmarkReducer = bookmarkSlice.reducer
export const bookmarkActions = bookmarkSlice.actions
