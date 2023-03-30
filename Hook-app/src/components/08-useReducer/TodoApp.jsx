import {useEffect, useReducer} from 'react'
import {todoReducer} from './todoReducer'

import './styles.css'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []

  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }]
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init)
  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch( action )

  }

  const handleToggle = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  return (
    <>
      <h1>TodoApp: ({ todos.length })</h1>
      <hr />

      <div className="col">
        <div className="left">
          <TodoList
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
          />
        </div>

        <div className="right">
          <TodoAdd 
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </>
  )
}

export default TodoApp
