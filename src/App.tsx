import React from 'react'
// import StateDemo from './StateDemo'
import List2 from './List2'
// import Demo from './ImmerDemo'
// import CallBackDemo from './UseCallbackDemo'
// import useTitle from './hooks/useTitle'
// import useMouse from './hooks/useMouse'
// import useGetInfo from './hooks/useGetInfo'
// ahooks
// import { useTitle } from 'ahooks'
// import { useMouse } from 'ahooks'
// import ClosureTrap from './ClosureTrap'

function App() {
  // Custom hooks
  // useTitle('App page 2')
  // const { x, y } = useMouse()
  // const { loading, info } = useGetInfo()
  // const mouse = useMouse()

  return (
    <>
      <p>App page</p>
      {/* <p>{loading ? 'Loading...' : info}</p> */}
      {/* <StateDemo /> */}
      <List2 />
      {/* <Demo /> */}
      {/* <CallBackDemo /> */}
      {/* <ClosureTrap /> */}
    </>
  )
}

export default App
