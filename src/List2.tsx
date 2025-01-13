import React, { FC, useState } from 'react'
import QuestionCard from './components/QuestionCard'

const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  function add() {
    const r = Math.random().toString().slice(-3)
    setQuestionList(
      // 新增用concat
      questionList.concat({
        id: 'q' + Math.random().toString().slice(-3),
        title: '问卷' + r,
        isPublished: false,
      })
    )
  }

  function deleteQuestion(id: string) {
    // 不可变数据
    setQuestionList(
      // 删除用filter
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
    setQuestionList(
      // 修改map
      questionList.map(q => {
        if (q.id !== id) return q

        return {
          ...q,
          isPublished: true,
        }
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
