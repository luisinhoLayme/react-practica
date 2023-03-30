import {useContext} from 'react'
import {UserContext} from './UserContext'

const LoginScreen = () => {

  const { setUser } = useContext(UserContext)

  return (
    <>
      <h1>LoginScreen</h1>
      <hr />

      <button
        className="button"
        onClick={() => setUser({
          id: 123,
          name: 'Luisinho'
        })}
      >
        Login
      </button>
    
    </>
  )
}

export default LoginScreen
