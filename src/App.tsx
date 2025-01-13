import React from 'react'
// import StateDemo from './StateDemo'
// import List2 from './List2'
// import Demo from './ImmerDemo'
// import CallBackDemo from './UseCallbackDemo'
// import useTitle from './hooks/useTitle'
import useMouse from './hooks/useMouse'

function App() {
  // Custom hooks
  // useTitle('App page 1')
  const { x, y } = useMouse()

  return (
    <>
      <p>
        App page {x} {y}
      </p>
      {/* return <StateDemo /> */}
      {/* return <List2 /> */}
      {/* return <Demo /> */}
      {/* <CallBackDemo /> */}
    </>
  )
}

export default App
