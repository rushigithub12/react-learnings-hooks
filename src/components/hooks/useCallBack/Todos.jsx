import React from 'react'

function Todos({ todos, addTodo }) {
    console.log('child render')
  return (
    <div>
        <h2>my todos</h2>
        {todos.map((todo, index) => {
            return (
                <div key={index}>{todo}</div>
            )
        })}
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default React.memo(Todos)