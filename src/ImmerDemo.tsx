import React, { useState, FC } from 'react'
import { produce } from 'immer'

const Demo: FC = () => {
  const [userInfo, setUserInfo] = React.useState({ name: 'frank', age: 18 })

  function changeAge() {
    // ** 不可变数据 ** - 不去修改 state 的值，而是要传入一个新的值 —— 重要！
    // setUserInfo({
    //   ...userInfo,
    //   age: 19,
    // })
    // setUserInfo(
    //   produce(draft => {
    //     draft.age = 19
    //     draft.name = 'jack'
    //   })
    // )
  }

  const [list, setList] = useState(['x', 'y'])
  function addItem() {
    setList(
      produce(draft => {
        draft.push('z')
      })
    )
  }

  return (
    <div>
      <h2>state 不可变数据</h2>
      {/* <p>{JSON.stringify(userInfo)}</p> */}
      {/* <button onClick={changeAge}>Change Age</button> */}
      <p>{JSON.stringify(list)}</p>
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default Demo
