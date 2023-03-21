// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from '@reduxjs/toolkit'
import staysArr from '../components/properties/stays.json'
import reducer from './reducer'

export const store = createStore(reducer)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch