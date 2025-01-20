import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from './store/index'
import { decrement, increment } from './store/count'

const CountRedux: FC = () => {
  const count = useSelector<StateType, number>(state => state.count)

  const dispatch = useDispatch()

  return (
    <div>
      <span> count: {count} </span>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  )
}

export default CountRedux
