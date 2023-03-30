import {useEffect, useState} from 'react';

import './effects.css'
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  useEffect(() => {
    // console.log('hola!!!');
  }, [])
  useEffect(() => {
    // console.log('formState');
  }, [formState])
  useEffect(() => {
    // console.log('email change');
  }, [email])

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-cotrol"
          placeholder="Tu nombre"
          autoCorrect="off"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-cotrol"
          placeholder="example@gmail.com"
          autoCorrect="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message /> }
    </>
  )
}

export default SimpleForm;
