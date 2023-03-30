import {} from 'react'
import {useForm} from './../../hooks/useForm'

const TodoAdd = ({handleAddTodo}) => {

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 3) return

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h3>Agregar TODO</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="input"
          placeholder="Aprender..."
          value={description}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button
          type="submit"
          className="button btn-agregar"
        >
          Agregar
        </button>
      </form>
    </>
  )
}

export default TodoAdd
