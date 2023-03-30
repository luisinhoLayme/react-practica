
import {useLayoutEffect, useRef, useState} from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './layout.css'

const Layout = () => {

  const [ boxSize, setBoxSize ] = useState()
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

  const { quote } = !!data && data[0]
  const pTag = useRef()

  useLayoutEffect(() => {
    setBoxSize( pTag.current.getBoundingClientRect() )
  }, [quote])

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <blockquote>
        <p ref={ pTag }>{ quote }</p>
      </blockquote>

      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>

      <button
        className="buton"
        onClick={ increment }
      >
        Next Quote
      </button>
    </>
  )
}

export default Layout
