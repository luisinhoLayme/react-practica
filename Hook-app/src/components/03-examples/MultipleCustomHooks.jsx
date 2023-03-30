import {} from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './multiple.css'

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  // console.log(loading)

  // !null = true, !!null = false || undefined
  const { author, quote } = !!data && data[0]
  console.log(author, quote)

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        loading
          ?
            (

              <div className="alert">
                Loading...
              </div>
            )
          :
          (
            <blockquote>
              <p>{ author }</p>
              <footer>- { quote }</footer>
            </blockquote>
          )
      }

      <button
        className="buton"
        onClick={ increment }
      >
        Next Quote
      </button>
    </>
  )
}

export default MultipleCustomHooks
