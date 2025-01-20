import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE = 100

export const countSlice = createSlice({
  name: 'count',
  initialState: INIT_STATE,
  reducers: {
    increment(state: number) {
      return state + 1
    },
    decrement(state: number) {
      return state - 1 // 返回一个新的state，不可变数据
    },
  },
})

export const { increment, decrement } = countSlice.actions
export default countSlice.reducer
