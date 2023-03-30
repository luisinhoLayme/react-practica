import {} from 'react'

const TodoListItem = ({
  todo,
  index,
  handleDelete,
  handleToggle
}) => {
  return (
    <li 
      className="list-item"
    >
      <p
        className={ `${ todo.done && 'complete' }` }
        onClick={() => handleToggle(todo.id)}
      >{ index + 1 }. { todo.desc }</p>
      <button
        onClick={ () => handleDelete(todo.id) }
        className="button btn-borrar"
      >
        Borrar
      </button>
    </li>
  )
}

export default TodoListItem
 
