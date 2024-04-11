import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    console.log(countdown)
    // navigating back to home in 5 seconds
    if (countdown > 0) {
      const id = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(id)
    }
    // remember to clear your timeouts and intervals!
    if (countdown === 0) {
      const id = setTimeout(() => {
        navigate('/')
      }, 1000)
      return () => clearTimeout(id)
    }
  }, [countdown])

  return (
    <div>
      <h1> No Account! Be ready to go "Home!" in {countdown} seconds</h1>
    </div>
  )
}

export default Account
