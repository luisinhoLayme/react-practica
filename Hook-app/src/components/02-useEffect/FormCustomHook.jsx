import {useForm} from '../../hooks/useForm';

import './effects.css'

const FormCustomHook = () => {

  const [formValue, handleInputChange] = useForm({
    name: '',
    email: ''
  });

  const { name, email } = formValue

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>FormCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-cotrol"
          placeholder="Tu nombre"
          autoComplete="off"
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
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>
      <input type="submit" value="SEND" />
    </form>
  )
}

export default FormCustomHook;
