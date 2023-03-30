import { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'

const MomoHook = () => {

  const { counter, increment } = useCounter(100)
  const [ show, setShow ] = useState(true)


  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small></h3>
      <hr />

      <p>{ memoProcesoPesado }</p>

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

export default MomoHook
