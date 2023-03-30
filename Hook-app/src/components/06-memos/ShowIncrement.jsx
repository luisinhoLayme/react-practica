import { memo } from 'react'

const ShowIncrement = memo( ({ increment }) => {

  console.log('me volvi a generar')

  return (
    <button
      className="button"
      onClick={() => {increment(5)}}
    >
      Increment
    </button>
  )
})

export default ShowIncrement
