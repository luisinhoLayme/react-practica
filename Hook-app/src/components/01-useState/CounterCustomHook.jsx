import {} from 'react';
import {useCounter} from '../../hooks/useCounter';

import './couter.css';

const CounterCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Conuter with Hook: { state }</h1>
      <hr />

      <button
        className="button"
        onClick={ () => decrement(2) }
      >- 2</button>
      <button
        className="button"
        onClick={ () => increment(2) }
      >+ 2</button>
      <button
        className="button"
        onClick={ reset }
      >Reset</button>
    </>
  )
}

export default CounterCustomHook;
