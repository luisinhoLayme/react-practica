import {useRef} from 'react'

const FocusScreen = () => {

  const ref = useRef()

  const handleClick = () => {
    ref.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={ ref }
        className="form-control"
        placeholder="Your name"
      />

      <button
        onClick={ handleClick }
      >
        Focus
      </button>
    </>
  )
}

export default FocusScreen
