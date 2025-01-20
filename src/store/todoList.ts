import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export type TodoItemType = {
  id: string
  title: string
  completed: boolean
}

const INIT_STATE: TodoItemType[] = [
  { id: nanoid(5), title: '吃饭', completed: false },
  { id: nanoid(5), title: '睡觉', completed: true },
]

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: INIT_STATE,
  reducers: {
    addTodo(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
      // return state.contact(action.payload) // 把 addTodo 添加到 list 最后面
      return [
        action.payload, // 把 addTodo 添加到 list 最前面
        ...state,
      ]
    },

    removeTodo(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
      return state.filter(todo => todo.id !== action.payload.id)
    },

    toggleCompleted(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    },
  },
})

export const { addTodo, removeTodo, toggleCompleted } = todoListSlice.actions

export default todoListSlice.reducer
