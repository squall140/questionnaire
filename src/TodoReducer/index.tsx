import React, { FC } from 'react'
import List from './List'
import InputForm from './InputForm'

const Demo: FC = () => {
  return (
    <>
      <p> Todo list by useReducer </p>
      <List />
      <InputForm />
    </>
  )
}

export default Demo
