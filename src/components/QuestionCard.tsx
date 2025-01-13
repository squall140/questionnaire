import React, { FC } from 'react'

// ts 自定义类型
type PropsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

// FC - functional component
const QuestionCard: FC<PropsType> = props => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props

  function edit(id: string) {
    console.log('edit', id)
  }

  function del(id: string) {
    deleteQuestion && deleteQuestion(id)
  }

  function publish(id: string) {
    publishQuestion && publishQuestion(id)
  }

  // let itemClassName = 'list-item'
  // if (isPublished) itemClassName += ' published'
  // 逻辑稍微复杂

  // const itemClassName = classnames('list-item', { published: isPublished })
  // const itemClassName = classnames({
  //   'list-item': true,
  //   published: isPublished,
  // })

  // const listItemClass = styles['list-item']
  // const publishedClass = styles.published
  // const itemClassName = classnames({
  //   [listItemClass]: true,
  //   [publishedClass]: isPublished,
  // })

  return (
    //   <div key={id} className={itemClassName}>
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {/* 条件判断 */}
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      {isPublished ? <span>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          publish(id)
        }}
      >
        发布问卷
      </button>
      &nbsp;
      <button
        onClick={() => {
          del(id)
        }}
      >
        删除问卷
      </button>
      &nbsp;
    </div>
  )
}

export default QuestionCard
