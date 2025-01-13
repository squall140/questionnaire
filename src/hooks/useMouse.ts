import { useState, useEffect } from 'react'

// get mouse position
function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mouseMoveHandler = (e: MouseEvent) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    // add event listener
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      // when component unmount, remove event listener
      // or may cause memory leak
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return { x, y }
}

export default useMouse
