import React, { useState } from 'react';
import UseTheme from '../hooks/useTheme';
import Input from './UI/Input/Input';
import Task from './UI/Task/Task';

function TodoList() {
  const { isDark, setIsDark } = UseTheme();
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Date.now().toString().slice(-4),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  // console.log(todos);
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => (todo.id === id
        ? { ...todo, complete: !todo.complete }
        : { ...todo }
      )),
    ]);
  };

  return (
    <>
      <header>
        <h1>
          Список задач:
          {' '}
          {todos.length}
        </h1>
      </header>
      <Input addTask={addTask} />
      <button className="btn-link" type="submit" onClick={() => setIsDark(!isDark)}>
        Change theme
      </button>
      {todos.map((todo) => (
        <Task
          todo={todo}
          key={todo.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
        />
      ))}
    </>
  );
}

export default TodoList;
