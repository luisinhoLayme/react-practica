import {memo} from 'react'

const Small = memo( ({ value }) => {

  console.log('Me volvi a mostrar :)')

  return (
    <>
      <small>{ value }</small>
    </>
  )
} )
export default Small
