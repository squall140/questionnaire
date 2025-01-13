import React, { FC, useState, useEffect } from 'react'
import { produce } from 'immer'
import QuestionCard from './components/QuestionCard'

const List2: FC = () => {
  // React18 开始，useEffect 开发环境下会执行两次，创建-销毁，销毁-创建
  //                        生产环境下 会只执行一次，创建
  useEffect(() => {
    console.log('List2 --创建--加载Ajax网络请求')
    return () => {
      console.log('List2 --销毁--卸载清理工作')
    }
  }, []) //数组为空，表示只在组件加载时执行，否则如果数组不为空，数组中的值发生变化时，会再次执行

  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  // for test
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log('count changed ' + count)
  // }, [count])

  // useEffect(() => {
  //   console.log('questionList changed')
  // }, [questionList])

  function add() {
    // setCount(count + 1)
    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    //   // 新增 concat
    //   questionList.concat({
    //     id: 'q' + Math.random().toString().slice(-3),
    //     title: '问卷' + r,
    //     isPublished: false,
    //   })
    // )

    // immer 的方式
    setQuestionList(
      produce(draft => {
        draft.push({
          id: 'q' + r,
          title: '问卷' + r,
          isPublished: false,
        })
      })
    )
  }

  function deleteQuestion(id: string) {
    // 不可变数据
    setQuestionList(
      // 删除 filter
      questionList.filter(q => {
        if (q.id !== id) {
          return true
        } else {
          return false
        }
      })
    )
  }

  function publishQuestion(id: string) {
    // setQuestionList(
    //   // 修改 map
    //   questionList.map(q => {
    //     if (q.id !== id) return q

    //     return {
    //       ...q,
    //       isPublished: true,
    //     }
    //   })
    // )

    // immer 方式
    setQuestionList(
      produce(draft => {
        const q = draft.find(item => item.id === id)
        if (q) q.isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页2</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  )
}

export default List2
