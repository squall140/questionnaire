import React, { FC, useState } from 'react'

const Demo: FC = () => {
  const [status, setStatus] = useState(0)

  const [count, setCount] = useState(0)
  const [name, setName] = useState('张三')

  function add() {
    // setState is asyncronous, so whatever how many times you clicks, it will only increase by 1
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // But if you use the following method, it will increase by 3,
    // because using function to set state will get the latest state in React.
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)

    // setCount(count + 1);
    console.log(count)
  }

  function changeName() {
    if (status === 0) {
      setStatus(1)
      setName('李四')
    } else {
      setStatus(0)
      setName('张三')
    }
    console.log(name)
  }

  return (
    <p>
      <button onClick={add}> count {count}</button>
      <button onClick={changeName}> name {name}</button>
    </p>
  )
}

export default Demo
