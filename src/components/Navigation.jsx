import { Link } from 'react-router-dom'

const Navigation = () => {
  // just an example - be ready for a navigation!
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
        <Link to="/cart"> Cart </Link>
        <Link to="/products"> Products </Link>
      </div>
    </div>
  )
}

export default Navigation
