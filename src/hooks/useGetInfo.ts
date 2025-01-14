import { useState, useEffect } from 'react'

// Asnyc function
function getInfo(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Date.now().toString())
    }, 1500)
  })
}
const useGetInfo = () => {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState('')

  useEffect(() => {
    getInfo().then(data => {
      setLoading(false)
      setInfo(data)
    })
  }, [])

  return { loading, info }
}

export default useGetInfo
