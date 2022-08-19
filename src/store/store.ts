import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bookmarkReducer } from './slices/bookmarkSlice'
const store = configureStore({
  reducer: bookmarkReducer,
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useBookmarkSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
