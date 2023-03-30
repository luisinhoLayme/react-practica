import {} from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <div className="left">
      {
        todos.map((todo, i) => (
          <TodoListItem
            key={todo.id}
            todo={ todo }
            index={ i }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        ))
      }
    </div>
  )
}

export default TodoList
