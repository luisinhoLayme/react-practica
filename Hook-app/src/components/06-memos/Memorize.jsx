import { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import Small from './Small'

const Memorize = () => {

  const { counter, increment } = useCounter(10)
  const [ show, setShow ] = useState(true)

  return (
    <>
      <h2>Counter: <Small value={ counter } /></h2>
      <hr />

      <button
        className="button"
        onClick={ increment }
      >
        +1
      </button>

      <button
        className="button"
        style={{ marginLeft: '1em' }}
        onClick={ () => { setShow( !show ) } }
      >
        Show/Hide { JSON.stringify(show) }
      </button>

    </>
  )
}

export default Memorize
