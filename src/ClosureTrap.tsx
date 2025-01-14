import React, { FC, useState, useEffect, useRef } from 'react'

/**
 * 闭包陷阱
 * 当异步函数获取state时， 获取的值有可能是旧值（不是最新的state)
 */
const Demo: FC = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  // 当count发生变化时，更新countRef
  useEffect(() => {
    countRef.current = count
  }, [count])

  function add() {
    setCount(count + 1)
  }

  function alertFn() {
    setTimeout(() => {
      //注意这里的count是闭包，不是最新的state
      //   alert(count)
      alert(countRef.current) // count 值类型，而 countRef.current 是引用类型
    }, 3000)
  }

  return (
    <>
      <p>闭包陷阱</p>
      <div>
        <span>{count}</span>
        <button onClick={add}>add</button>
        <button onClick={alertFn}>alert</button>
      </div>
    </>
  )
}

export default Demo
