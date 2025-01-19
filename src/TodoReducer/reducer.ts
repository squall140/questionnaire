import { TodoType } from './store'

export type ActionType = {
  type: string
  payload?: any // 附加的内容
}

export default function reducer(state: TodoType[], action: ActionType) {
  switch (action.type) {
    case 'add':
      return state.concat(action.payload) // 返回新的state,不可变数据，不能修改
    case 'delete':
      return state.filter(todo => todo.id !== action.payload)
    default:
      throw new Error()
  }
}
