import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [sample, setSample] = useState(
    "This is sample context, see how to get this text in 'Products.jsx'"
  )
  const [array, setArray] = useState([
    'Home Screen',
    'Can',
    'You',
    'See',
    'What',
    'Is',
    'Happening',
    'Here?'
  ])

  // put your state in here to give EVERY page access
  const context = {
    values: { sample, array },
    setters: { setSample, setArray }
  }

  return (
    <div>
      <Navigation />
      <Outlet context={context} />
      <Footer />
    </div>
  )
}

export default Home
