import React, { useState, useCallback } from 'react'
import Todos from './Todos';

function HookCall() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(c => c + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"] )
    }, [todos]);
    
  return (
    <div>
        <Todos todos={todos} addTodo={addTodo} />
        <div>
            Count - {count}
            <button onClick={increment}>increment</button>
        </div>
    </div>
  )
}

export default HookCall