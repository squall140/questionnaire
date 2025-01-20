import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../store/index'
import type { TodoItemType } from '../store/todoList'
import { removeTodo, toggleCompleted } from '../store/todoList'

const TodoListRedux: FC = () => {
  // as 类型转换
  const todoList = useSelector<StateType>(state => state.todoList) as TodoItemType[]
  const dispatch = useDispatch()

  return (
    <>
      <p>TodoListRedux Demo</p>
      <ul>
        {todoList.map(todo => {
          const { id, title, completed } = todo
          return (
            <li key={id} style={{ textDecoration: completed ? 'line-through' : '' }}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleCompleted({ id }))}
              />
              <span>{title}</span> &nbsp;
              <button onClick={() => dispatch(removeTodo({ id }))}> - </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoListRedux
